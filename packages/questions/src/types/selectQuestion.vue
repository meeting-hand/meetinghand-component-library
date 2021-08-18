<template>
  <div class="question question-select">
    <mh-select
      :options="selectOptions"
      :placeholder="question.information"
      :label="question.label"
      :searchable="question.selectMultiple"
      :error-message="errorMessage"
      v-model="question.value"
    />
    <div
      :key="subField.id"
      v-for="(subField, keySubField) in subFieldedOptions"
    >
      <mh-questions
        :errors="errors"
        :deep="deep + 1"
        v-model:questions="subFieldedOptions[keySubField].eventFormFields"
      />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";

import MhSelect from "@meetinghand/select";
import MhQuestions from "../index.vue";

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
    errorMessage: {
      type: String,
      default: "",
    },
    errors: {
      type: Object,
      default: () => {},
    },
    deep: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const subFieldedOptions = computed(() => {
      return props.question.eventFormFieldOptions.filter((_o) =>
        props.question.selectMultiple
          ? props.question.value.find((optionID) => optionID == _o.id)
          : props.question.value === _o.id
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

    return {
      subFieldedOptions,
      selectOptions,
    };
  },
};
</script>
