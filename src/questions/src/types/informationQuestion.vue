<template>
  <div class="question question-information">
    <mh-banner
      type="section"
      :message="question.label"
      :section-type="question.informationIcon"
      :title="question.information"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import MhBanner from "../../../banner";

export default defineComponent({
  components: {
    MhBanner,
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
  setup() {},
});
</script>
