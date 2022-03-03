<template>
  <component :is="type" :colors="colors" :paletteWidth="paletteWidth">
    <slot></slot>
  </component>
</template>

<script>
// NOT USED!! => @ckpack/vue-color
//import Default from "./types/default.vue";
import Palette from "./types/palette.vue";

import "./assets/main.scss";

export default {
  name: "MhButton",
  components: {
    //Default,
    Palette,
  },
  props: {
    type: {
      type: String,
      default: "palette",
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
@import "@meetinghand/style/lib/scss/variables.scss";
.color-trigger {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: $border-radius-default;
  overflow: hidden;
}

.vc-sketch {
  margin-top: -40px;
  margin-left: 40px;
  width: 368px;
  height: 279px;
  background-color: $color-mono-white;
  padding: 21px;
  border: $border-size-default solid $color-mono-light-grey-5;
  box-shadow: 0px 12px 16px $shadow-1;
  border-radius: $border-radius-default;
  position: relative;
  .vc-sketch-saturation-wrap {
    padding: $spacing-xxsmall;
    height: 237px;
  }
  .vc-saturation {
    width: 240px;
  }
  .vc-input__label {
    display: none;
  }
  .vc-sketch-field--single {
    display: none;
  }
  .vc-sketch-field,
  .vc-sketch-presets {
    position: absolute;
    left: 285px;
    top: 21px;
    width: 104px;
    padding: $spacing-xxsmall;
    margin: $spacing-xxsmall;
  }
  .vc-sketch-presets {
    border: none;
    top: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .vc-sketch-presets-color {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin: $spacing-xxsmall;
      padding: $spacing-xxsmall;
      &:nth-of-type(2),
      &:nth-of-type(5),
      &:nth-of-type(8) {
        margin-left: $spacing-default;
        margin-right: $spacing-default;
      }
      margin-bottom: $spacing-default;
    }
  }
  .vc-sketch-color-wrap {
    display: none;
  }
  .vc-sketch-sliders {
    padding: $spacing-xxsmall;
    .vc-sketch-hue-wrap {
      height: $spacing-default;
      .vc-hue--horizontal {
        border-radius: $border-radius-xlarge;
        .vc-hue-container {
          margin: $spacing-xxsmall;
          margin-right: 12px;
        }
      }
      .vc-hue-picker {
        margin-top: 1px;
        background-color: var(--mh-color-picker);
      }
    }
  }
  .vc-sketch-controls {
    width: 240px;
    margin-top: 24px;
  }
  .vc-saturation-circle,
  .vc-hue-picker {
    border-radius: $border-radius-xlarge;
    border: $border-size-large solid $color-mono-white;
    width: 14px;
    height: 14px;
    padding: $spacing-xxsmall;
    margin: $spacing-xxsmall;
    //box-shadow: none;
  }
  .vc-input__input {
    height: 52px;
    width: 104px;
    // border: $border-size-default solid $color-mono-grey;
    color: $color-mono-black;
    font-size: $font-size-large;
    line-height: $line-height-default;
    //padding: $spacing-default;
    margin: $spacing-xxsmall;
    border-radius: $border-radius-default;
  }
}

.palette-color-picker {
  height: 208px;
  background: $color-mono-white;
  border: $border-size-default solid $transparent-hover-3;
  box-sizing: border-box;
  box-shadow: $spacing-xxsmall $spacing-medium $spacing-default $shadow-1;
  border-radius: $border-radius-xxlarge;
  padding: $spacing-default;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .color {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $spacing-xxlarge;
    height: $spacing-xxlarge;
    border-radius: $border-radius-giant;
    cursor: pointer;
    .mh-icon-ui-check {
      width: $icon-size-default;
      height: $icon-size-default;
      fill: $color-mono-white;
    }
  }
}

.selected-color {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: $border-size-default solid $color-mono-grey-2;
  box-sizing: border-box;
  border-radius: $border-radius-default;
  width: 73px;
  height: 44px;
  cursor: pointer;
  .color {
    width: 20px;
    height: 20px;
    border-radius: $border-radius-giant;
    margin-left: $spacing-medium;
  }
  .selected-color {
    border: 3px solid $transparent-hover-3;
  }
  .mh-icon {
    width: $icon-size-default;
    height: $icon-size-default;
  }
  .mh-icon-chevron-down {
    fill: $color-mono-grey-2;
    margin-right: $spacing-medium;
  }
  .mh-icon-chevron-up {
    fill: $color-primary-blue;
    margin-right: $spacing-medium;
  }
  &.popover-active {
    border-color: $color-primary-blue;
  }
}
</style>
