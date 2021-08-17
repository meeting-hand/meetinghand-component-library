<template>
  <div class="question question-checkbox">
    <label>{{ question.label }}</label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-checkbox
          :label="option.label"
          :data="option.id"
          v-model="question.value"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import MhCheckbox from "@meetinghand/checkbox";

export default {
  components: {
    MhCheckbox,
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
  },
  setup() {},
};
</script>

