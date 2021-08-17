<template>
  <div class="question question-radio">
    <label>{{ question.label }}</label>
    <ul>
      <li :key="option.id" v-for="option in question.eventFormFieldOptions">
        <mh-radio
          v-model="question.value"
          :text="option.label"
          :data="option.id"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import MhRadio from "@meetinghand/radio";

export default {
  components: {
    MhRadio,
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

