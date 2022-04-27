<template>
  <div class="question question-select">
    <mh-select
      :options="selectOptions"
      :placeholder="question.hint"
      :tooltip="question.information"
      :label="question.label"
      :error-message="errorMessage"
      v-model="value"
    >
      <template v-slot:tooltip>
        <tooltip
          v-if="question.information"
          size="large"
          placement="top"
          :text="question.information"
        >
          <mh-icon name="system-info" />
        </tooltip>
      </template>
    </mh-select>
    <div
      :key="subField.id"
      v-for="(subField, keySubField) in subFieldedOptions"
    >
      <mh-questions
        :deep="deep + 1"
        :fieldPrefix="fieldPrefix"
        :dateFormat="dateFormatLocation"
        v-model:questions="subFieldedOptions[keySubField].eventFormFields"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

import { inject } from "vue";
import { questionValidation } from "../composables/validations";

import MhSelect from "../../../select";
import MhQuestions from "../index.vue";
import Tooltip from "../../../tooltip";
import MhIcon from "../../../style/icons";

export default defineComponent({
  components: {
    MhSelect,
    MhQuestions,
    Tooltip,
    MhIcon,
  },
  props: {
    question: {
      type: Object as () => any,
      required: true,
    },
    deep: {
      type: Number,
      default: 1,
    },
    fieldPrefix: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { value, errorMessage } = questionValidation(
      props.question,
      props.fieldPrefix
    );

    const subFieldedOptions = computed(() => {
      return props.question.eventFormFieldOptions.filter(
        (_o: any) => value.value === _o.id
      );
    });

    const selectOptions = computed(() => {
      return props.question.eventFormFieldOptions.map((_o: any) => {
        return {
          value: _o.id,
          label: _o.label,
        };
      });
    });

    const dateFormatLocation: any = inject("dateFormat");

    return {
      subFieldedOptions,
      selectOptions,
      dateFormatLocation,
      value,
      errorMessage,
    };
  },
});
</script>
