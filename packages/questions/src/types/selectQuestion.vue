<template>
  <div class="question question-select">
    <mh-select
      :options="selectOptions"
      :placeholder="question.information"
      :label="question.label"
      :error-message="errorMessage"
      v-model="value"
    />
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

import MhSelect from "@meetinghand/select";
import MhQuestions from "../index.vue";

import { inject } from "vue";
import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhSelect,
    MhQuestions,
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
