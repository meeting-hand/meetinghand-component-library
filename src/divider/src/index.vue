<template>
  <hr :class="[`size-${size}`, 'mh-divider']" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MhDivider",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: (_v: string) =>
        ["normal", "thin", "medium", "bold", "xxbold"].includes(_v),
    },
  },
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
