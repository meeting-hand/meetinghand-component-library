<template>
  <component
    :is="tag"
    :class="btnClass"
    :style="btnStyle"
    :target="target"
    v-if="!routerRedirectStatus"
  >
    <slot></slot>
  </component>
  <router-link
    :class="btnClass"
    tag="a"
    :style="btnStyle"
    :to="to"
    :target="target"
    v-else
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "MhButton",

  data() {
    return {};
  },

  props: {
    borderless: {
      type: Boolean,
      required: false,
      default: false,
    },

    tag: {
      type: String,
      required: false,
      default: "a",
    },

    type: {
      type: Boolean,
      required: false,
      default: false,
    },

    iconOnly: {
      type: Boolean,
      required: false,
      default: false,
    },

    small: {
      type: Boolean,
      required: false,
      default: false,
    },

    color: {
      type: String,
      required: false,
      default: "blue",
    },

    icon: {
      type: String,
      required: false,
      default: null,
    },

    width: {
      type: String,
      required: false,
      default: null,
    },

    height: {
      type: String,
      required: false,
      default: null,
    },

    justify: {
      type: String,
      required: false,
      default: null,
    },

    to: {
      type: [String, Object],
      default: null,
    },

    transform: {
      type: String,
      required: false,
      default: null,
    },

    block: {
      type: Boolean,
      required: false,
      default: false,
    },

    target: {
      type: String,
      default: "_self",
    },
  },

  computed: {
    btnClass() {
      return [
        {
          borderless: this.borderless,
          iconOnly: this.iconOnly,
          small: this.small,
          type: this.type,
          block: this.block,
        },
        this.icon,
        this.color,
        "mh-button",
      ];
    },

    btnStyle() {
      return [
        {
          width: this.width,
        },
        {
          height: this.height,
        },
        {
          "justify-content": this.justify,
        },
        {
          "text-transform": this.transform,
        },
      ];
    },

    routerRedirectStatus() {
      return this.to !== null;
    },
  },
};
</script>
