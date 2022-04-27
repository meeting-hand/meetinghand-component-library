<template>
  <a-modal
    v-model:visible="status"
    :closable="closable"
    :maskClosable="maskClosable"
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

<script lang="ts">
import { h, defineComponent } from "vue";

import { Modal } from "ant-design-vue";
import MhIcon from "../../style/icons";

export default defineComponent({
  name: "MhModal",
  components: {
    [Modal.name]: Modal,
    "mh-icon": MhIcon,
  },
  computed: {
    status: {
      get() {
        return this.modelValue;
      },
      set(data: boolean) {
        this.$emit("update:modelValue", data);
      },
    },
    width() {
      const widths: any = {
        default: 420,
        large: 640,
      };
      return widths[this.size];
    },
    modalFooterProp() {
      return this.$slots.footer ? this.$slots.footer : null;
    },
    closeIcon() {
      return h(MhIcon, { name: "system-close" });
    },
  },
  props: {
    size: {
      type: String,
      default: "default",
      validator: (_v: string) => ["default", "large"].includes(_v),
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
      default: true,
    },
    maskClosable: {
      type: Boolean,
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
      validator: (_v: string) => ["modal", "dialog"].includes(_v),
    },
  },
  emits: {
    "update:modelValue": null,
  },
  methods: {
    close() {
      this.status = false;
    },
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
