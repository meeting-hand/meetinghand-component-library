<template>
  <component :is="type" :colors="colors" :paletteWidth="paletteWidth">
    <slot></slot>
  </component>
</template>

<script>
import Default from "./types/default.vue";
import Palette from "./types/palette.vue";

export default {
  name: "MhButton",
  components: {
    Default,
    Palette,
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "palette"].includes(_v),
    },
    colors: {
      type: Array,
      default: () => [
        "#6421F3",
        "#3F51B5",
        "#4CAF50",
        "#2A535D",
        "#9C27B0",
        "#F44336",
        "#0EAD88",
        "#FF9800",
        "#FFC700",
        "#3FA0B5",
        "#00D1FF",
        "#C336F4",
      ],
    },
    paletteWidth: {
      type: String,
      default: "160px",
    },
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
