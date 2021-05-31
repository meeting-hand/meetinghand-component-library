<template>
  <hr :class="[`size-${size}`, 'mh-divider']" />
</template>

<script>
export default {
  name: "MhDivider",
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
