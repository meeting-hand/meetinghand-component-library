<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="no-answer">
      <span>{{ $t("message.noAnswer") }}</span>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>
