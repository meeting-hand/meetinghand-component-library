<template>
  <a-popover
    placement="bottomLeft"
    trigger="click"
    v-model:visible="popoverStatus"
  >
    <template #content>
      <div class="palette-color-picker" :style="[`width: ${paletteWidth}`]">
        <div
          v-for="(color, key) in colors"
          :key="key"
          :class="['color', { 'selected-color': selectedColor == color }]"
          :style="[`background: ${color}`]"
          @click="colorSelect(color)"
        >
          <mh-icon name="ui-check" v-if="selectedColor == color" />
        </div>
      </div>
    </template>
    <div :class="['selected-color', { 'popover-active': popoverStatus }]">
      <div class="color" :style="[`background: ${selectedColor}`]"></div>
      <mh-icon :name="popoverStatus ? 'chevron-up' : 'chevron-down'" />
    </div>
  </a-popover>
</template>

<script>
import { ref } from "vue";

import Popover from "ant-design-vue/es/popover";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default {
  components: {
    [Popover.name]: Popover,
    MhIcon,
  },
  props: {
    colors: {
      type: Array,
      default: () => [
        "#3FA0B5",
        "#2A535D",
        "#0EAD88",
        "#3F51B5",
        "#FF9800",
        "#4CAF50",
        "#FFC700",
        "#C336F4",
        "#9C27B0",
        "#6421F3",
        "#00D1FF",
        "#F44336",
      ],
    },
    modelValue: {
      type: String,
      required: true,
    },
    paletteWidth: {
      type: String,
      default: "160px",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const popoverStatus = ref(false);

    const selectedColor = ref([props.modelValue]);

    const colorSelect = (colorNumber) => {
      selectedColor.value = [];
      emit("update:modelValue", colorNumber);
      selectedColor.value.push(colorNumber);
      popoverStatus.value = false;
    };

    return {
      popoverStatus,
      colorSelect,
      selectedColor,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@meetinghand/style/lib/scss/variables.scss";

.popover-select {
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    margin: $spacing-small 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: $border-radius-giant;
  }
  width: 328px;
  height: 400px;
  overflow-y: scroll;
  background-color: $color-mono-white;
  border: $border-size-default solid $transparent-hover-3;
  border-radius: $border-radius-xxlarge;
  box-shadow: 0px 12px 16px $shadow-1;
}
</style>
