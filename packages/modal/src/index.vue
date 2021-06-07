<template>
  <a-modal
    v-model:visible="modelValue"
    :closable="closable"
    :destroyOnClose="true"
    @cancel="close()"
    :class="[`mh-modal-${size}`]"
    :width="width"
    :footer="modalFooterProp"
    :title="dialogTitle"
    :closeIcon="closeIcon"
    :keyboard="keyboard"
  >
    <div :class="icon">
      <mh-icon :name="icon" v-if="icon" />
    </div>

    <h1 v-if="title">{{ title }}</h1>
    <slot></slot>

    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </a-modal>
</template>

<script>
import Modal from "ant-design-vue/lib/modal";
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
        center: 410,
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
      validator: (_v) => ["default", "large", "center"].includes(_v),
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
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
