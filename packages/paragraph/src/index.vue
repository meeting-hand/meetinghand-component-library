<template>
  <a-textarea
    Onupdate:value="value"
    :placeholder="placeholder"
    :auto-size="{
      minRows: 5,
      maxRows: 7,
    }"
    :disabled="disabled"
  />
</template>

<script>
import Paragraph from "ant-design-vue/lib/input/TextArea";
import { ref } from "vue";

export default {
  name: "MhParagraph",
  components: {
    [Paragraph.name]: Paragraph,
  },
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const value = ref("");
    return {
      value: `${props.value}`,
    };
  },
};
</script>

<style scoped>
</style>
