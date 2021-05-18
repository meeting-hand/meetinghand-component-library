<template>
  <hr :class="[`size-${size}`]" />
</template>

<script>
export default {
  name: "Divider",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: (_v) =>
        ["normal", "thin", "medium", "bold", "xxbold"].includes(_v),
    },
  },
};
</script>
