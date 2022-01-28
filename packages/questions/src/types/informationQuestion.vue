<template>
  <div class="question question-information">
    <mh-banner
      type="section"
      :text="question.label"
      :section-type="question.informationIcon"
      :title="question.information"
    />
  </div>
</template>
<script>
import MhBanner from "../../../banner";

export default {
  components: {
    MhBanner,
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
  setup() {},
};
</script>
