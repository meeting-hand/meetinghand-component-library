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
<script>
import { computed } from "vue";

import { inject } from "vue";
import { questionValidation } from "../composables/validations";

import MhSelect from "@meetinghand/select/src/index.vue";
import MhQuestions from "../index.vue";
import Tooltip from "@meetinghand/tooltip";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default {
  components: {
    MhSelect,
    MhQuestions,
    Tooltip,
    MhIcon,
  },
  props: {
    question: {
      type: Object,
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
        (_o) => value.value === _o.id
      );
    });

    const selectOptions = computed(() => {
      return props.question.eventFormFieldOptions.map((_o) => {
        return {
          value: _o.id,
          label: _o.label,
        };
      });
    });

    const dateFormatLocation = inject("dateFormat");

    return {
      subFieldedOptions,
      selectOptions,
      dateFormatLocation,
      value,
      errorMessage,
    };
  },
};
</script>
