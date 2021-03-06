<template>
  <div class="mh-date-picker-label" v-if="label">
    <label>
      {{ label }}
      <slot name="tooltip"> </slot>
    </label>
  </div>
  <a-date-picker
    v-model:value="value"
    :format="format"
    :valueFormat="format"
    :class="[{ error: hasError }]"
    :disabled="disabled"
    :placeholder="placeholder"
    :suffix-icon="icon"
    :id="id"
    :disabledDate="disabledDate"
    :allowClear="false"
  />
</template>

<script lang="ts">
import { computed, h, defineComponent } from "vue";

import { DatePicker } from "ant-design-vue";
import MhIcon from "../../../style/icons";

export default defineComponent({
  name: "MhDatePickerDefault",
  components: {
    [DatePicker.name]: DatePicker,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    format: {
      type: String,
      default: "DD.MM.YYYY",
      validator: (_v: string) => ["DD.MM.YYYY", "MM.DD.YYYY"].includes(_v),
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "_" + Math.random().toString(36).substr(2, 9),
    },
    disabledStartDate: {
      type: [String, Date],
    },
    disabledEndDate: {
      type: [String, Date],
    },
    label: {
      type: String,
      default: null,
    },
    labelLeft: {
      type: String,
      default: null,
    },
    labelRight: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const icon = h(MhIcon, { name: "ui-date" });

    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });

    const disabledDate = (_d: any) => {
      _d = _d.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
      if (
        props.disabledStartDate &&
        new Date(props.disabledStartDate).getTime() >= new Date(_d).getTime()
      ) {
        return true;
      }
      if (
        props.disabledEndDate &&
        new Date(_d).getTime() > new Date(props.disabledEndDate).getTime()
      ) {
        return true;
      }
      return false;
    };

    return {
      icon,
      value,
      disabledDate,
    };
  },
});
</script>
