<template>
  <div class="text question">
    <label>{{ question.label }}</label>
    <div class="value">
      <span>{{ question.value }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object as () => any,
      required: true,
    },
  },
  setup(props) {
    const dateFormatLocation = inject("dateFormat");

    if (
      props.question.value &&
      new Date(props.question.value) instanceof Date
    ) {
      let value = props.question.value;
      const day = new Date(props.question.value)
        .getDate()
        .toString()
        .padStart(2, "0");
      const month = (new Date(props.question.value).getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const year = new Date(props.question.value).getFullYear();
      if (dateFormatLocation === "US") {
        value = `${month}.${day}.${year}`;
      } else {
        value = `${day}.${month}.${year}`;
      }
      props.question.value = value;
    }

    return {};
  },
});
</script>
