<template>
  <div :class="[`full-width-banner`, bannerType]">
    <div class="full-width-banner-container">
      <div class="banner-left">
        <div class="banner-icon">
          <mh-icon name="system-status-error" v-if="icon === 'warning'" />
          <mh-icon name="system-status-success" v-if="icon === 'success'" />
          <mh-icon name="ui-gift" v-if="icon === 'gift'" />
        </div>
        <div class="banner-text">
          <div class="banner-text-title">
            {{ title }}
          </div>
          <div class="banner-text-message">
            <slot></slot>
          </div>
        </div>
      </div>

      <div class="banner-buttons">
        <mh-button
          v-if="primaryButtonText"
          type="primary"
          :color="primaryButtonColor"
          @click="primaryButtonClick()"
          >{{ primaryButtonText }}</mh-button
        >
        <mh-button
          v-if="secondaryButtonText"
          type="secondary"
          :color="secondaryButtonColor"
          @click="secondaryButtonClick()"
          >{{ secondaryButtonText }}</mh-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import MHIcon from "@meetinghand/style/icons/index.vue";
import MhButton from "../../../button/index";

export default {
  components: {
    "mh-icon": MHIcon,
    MhButton,
  },
  props: {
    bannerType: {
      type: String,
      default: "warning",
      validator: (_v) => ["warning", "success"].includes(_v),
    },
    title: {
      type: String,
    },
    primaryButtonColor: {
      type: String,
      validator: (_v) => ["green", "red"].includes(_v),
    },
    primaryButtonText: {
      type: String,
    },

    secondaryButtonColor: {
      type: String,
      validator: (_v) => ["green", "red"].includes(_v),
    },
    secondaryButtonText: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  emits: ["primaryButtonClick", "secondaryButtonClick"],
  setup(props, { emit }) {
    const primaryButtonClick = () => {
      emit("primaryButtonClick", true);
    };
    const secondaryButtonClick = () => {
      emit("secondaryButtonClick", true);
    };
    return {
      primaryButtonClick,
      secondaryButtonClick,
    };
  },
};
</script>
