<template>
  <div class="mh-color-picker" ref="color-picker">
    <a
      class="color-trigger"
      @click="toggle()"
      :style="{ 'background-color': value }"
    ></a>
    <sketch
      v-model="value"
      v-if="active"
      :presetColors="palette"
      disableAlpha
    />
  </div>
</template>

<script>
import { Sketch } from "@ckpack/vue-color";

export default {
  name: "MhColorPicker",
  components: {
    Sketch,
  },
  data() {
    return {
      palette: [
        "#2196F3",
        "#3F51B5",
        "#4CAF50",
        "#2A535D",
        "#9C27B0",
        "#F44336",
        "#0EAD88",
        "#FF9800",
        "#FFC700",
      ],
      active: false,
    };
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(data) {
        this.setCssVariable(data.hex);
        this.$emit("update:modelValue", data.hex);
      },
    },
  },
  methods: {
    hide() {
      this.active = false;
    },
    toggle() {
      this.active = !this.active;
    },
    setCssVariable(hex) {
      document.documentElement.style.setProperty("--mh-color-picker", hex);
    },
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
