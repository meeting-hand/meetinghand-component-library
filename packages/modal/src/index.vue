<template>
  <a-modal
    v-model:visible="modelValue"
    :closable="closable"
    :destroyOnClose="true"
    @cancel="close()"
    :class="[`mh-modal-${size}`, modalType]"
    :width="width"
    :footer="modalFooterProp"
    :title="dialogTitle"
    :closeIcon="closeIcon"
    :keyboard="keyboard"
  >
    <div :class="icon">
      <mh-icon :name="icon" v-if="icon" />
    </div>
    <slot></slot>
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </a-modal>
</template>

<script>
import { Modal } from "ant-design-vue";
import "./assets/main.scss";

import MHIcon from "@meetinghand/style/icons/index.vue";
import SystemClose from "@meetinghand/style/icons/systemClose.vue";

import { h } from "vue";

export default {
  name: "MhModal",
  components: {
    [Modal.name]: Modal,
    "mh-icon": MHIcon,
  },
  computed: {
    width() {
      const widths = {
        default: 420,
        large: 640,
      };
      return widths[this.size];
    },
    modalFooterProp() {
      return this.$slots.footer ? this.$slots.footer : null;
    },
    closeIcon() {
      return h(SystemClose);
    },
  },
  props: {
    size: {
      type: String,
      default: "default",
      validator: (_v) => ["default", "large"].includes(_v),
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    closable: {
      type: Boolean,
      required: false,
      default: true,
    },
    dialogTitle: {
      type: String,
      required: false,
      default: "",
    },
    keyboard: {
      type: Boolean,
      default: true,
    },
    modalType: {
      type: String,
      default: "modal",
      validator: (_v) => ["modal", "dialog"].includes(_v),
    },
  },
  emits: {
    "update:modelValue": null,
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>
