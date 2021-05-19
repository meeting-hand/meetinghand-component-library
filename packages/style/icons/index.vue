<template>
  <component :is="name" class="mh-icon"></component>
</template>
<script>
import ArrowDown from "./arrowDown";
import ArrowUp from "./arrowUp";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";
import ChevronLeft from "./chevronLeft";
import ChevronDown from "./chevronDown";
import ChevronRight from "./chevronRight";
import ChevronUp from "./chevronUp";
import OrderDown from "./orderDown";
import OrderUp from "./orderUp";
import subRightArrow from "./subRightArrow";
import SubLeftArrow from "./subLeftArrow";
import Wait from "./wait";

const iconList = [
  "arrow-down",
  "arrow-up",
  "arrow-left",
  "arrow-right",
  "chevron-left",
  "chevron-down",
  "chevron-right",
  "chevron-up",
  "order-down",
  "order-up",
  "sub-right-arrow",
  "sub-left-arrow",
  "wait",
];

export default {
  components: {
    ArrowDown,
    ArrowUp,
    ArrowLeft,
    ArrowRight,
    ChevronLeft,
    ChevronDown,
    ChevronRight,
    ChevronUp,
    OrderDown,
    OrderUp,
    subRightArrow,
    SubLeftArrow,
    Wait,
  },
  props: {
    name: {
      type: String,
      required: true,
      validator: (_i) => iconList.includes(_i),
    },
  },
};
</script>
<style scoped>
svg {
  width: 12px;
  height: 14px;
}
</style>