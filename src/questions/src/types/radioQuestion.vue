<template>
  <div class="question question-radio">
    <label>
      {{ question.label }}
      <tooltip
        v-if="question.information"
        size="large"
        placement="top"
        :text="question.information"
      >
        <mh-icon name="system-info" />
      </tooltip>
    </label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-radio
          :text="option.label"
          :data="option.id"
          v-model="value"
          @update:modelValue="otherOption = false"
        />
        <mh-questions
          :deep="deep + 1"
          :fieldPrefix="fieldPrefix"
          :dateFormat="dateFormatLocation"
          v-if="value == option.id"
          v-model:questions="option.eventFormFields"
        />
      </li>
      <li v-if="question.radioOtherOption">
        <mh-radio
          v-model="otherOption"
          text="Other"
          :data="true"
          @update:modelValue="value = null"
        />
        <mh-input v-model="value" v-if="otherOption" class="other-input" />
      </li>
    </ul>
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>
<script lang="ts">
import { ref, inject, defineComponent } from "vue";
import { questionValidation } from "../composables/validations";

import MhRadio from "../../../radio";
import MhInput from "../../../input";
import MhQuestions from "../index.vue";
import Tooltip from "../../../tooltip";
import MhIcon from "../../../style/icons";

export default defineComponent({
  components: {
    MhRadio,
    MhQuestions,
    MhInput,
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

    const otherOption = ref(typeof value.value === "string");

    const dateFormatLocation: any = inject("dateFormat");

    return {
      otherOption,
      dateFormatLocation,
      value,
      errorMessage,
    };
  },
});
</script>

