<template>
  <a-alert :type="bannerType" :show-icon="false" banner>
    <template #message>
      {{ text }}
      <slot></slot>
    </template>
  </a-alert>
</template>
<script>
import Alert from "ant-design-vue/lib/alert";

export default {
  components: {
    [Alert.name]: Alert,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
    button: {
      type: String,
      default: null,
      validator: (_v) => [null, "custom", "close"].includes(_v),
    },
    customText: {
      type: String,
      default: null,
    },
  },
};
</script>
