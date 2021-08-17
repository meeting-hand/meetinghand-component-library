<template>
  <div class="question question-information">
    <mh-banner
      type="section"
      :text="question.information"
      :section-type="question.informationIcon"
      :title="question.label"
    />
  </div>
</template>
<script>
import MhBanner from "@meetinghand/banner";

export default {
  components: {
    MhBanner,
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
