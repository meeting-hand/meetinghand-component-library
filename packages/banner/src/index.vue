<template>
  <div class="mh-banner">
    <component
      :is="type"
      :button="button"
      :text="text"
      :bannerType="bannerType"
      :customText="customText"
      :sectionType="sectionType"
      :title="title"
      :icon="icon"
      :primaryButtonColor="primaryButtonColor"
      :primaryButtonText="primaryButtonText"
      :secondaryButtonColor="secondaryButtonColor"
      :secondaryButtonText="secondaryButtonText"
      @primaryButtonClick="primaryButtonClick()"
      @secondaryButtonClick="secondaryButtonClick()"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
import Section from "./types/section.vue";
import FullWidth from "./types/fullWidth.vue";
import MhButton from "../../button/src/index.vue";
import props from "./utils/props";

export default {
  name: "MhBanner",
  components: {
    Section,
    FullWidth,
    MhButton,
  },
  props: {
    ...props,
  },
  setup() {
    const primaryButtonClick = () => {
      console.log("clicked");
    };
    const secondaryButtonClick = () => {
      console.log("clicked");
    };
    return {
      primaryButtonClick,
      secondaryButtonClick,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
