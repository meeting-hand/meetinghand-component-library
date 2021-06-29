<template>
  <div class="mh-range-picker-label" v-if="labelLeft || labelRight">
    <div class="label-left">
      <label>
        {{ labelLeft }}
      </label>
    </div>
    <div class="label-right">
      <label>
        {{ labelRight }}
      </label>
    </div>
  </div>
  <a-range-picker
    v-model:value="value"
    :format="format"
    :valueFormat="format[0]"
    :class="[
      { error: hasError },
      'mh-range-picker',
      { 'mh-range-picker-opened': status },
    ]"
    :disabled="disabled"
    :placeholder="placeholder"
    :allowClear="false"
    :id="id"
    @openChange="openChange"
    separator=""
    :suffixIcon="icon"
  />
</template>

<script>
import { DatePicker } from "ant-design-vue";
import { computed, ref, h } from "vue";
import MhDate from "@meetinghand/style/icons/uiDate.vue";
import MHIcon from "@meetinghand/style/icons/index.vue";

export default {
  name: "MhDatePickerRange",
  components: {
    [DatePicker.RangePicker.name]: DatePicker.RangePicker,
    "mh-icon": MHIcon,
  },
  props: {
    modelValue: {
      type: Array,
      default: () => ["", ""],
    },
    format: {
      type: Array,
      default: () => ["DD.MM.YYYY", "DD.MM.YYYY"],
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
      type: Array,
      default: () => ["", ""],
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
    const status = ref(false);

    const icon = h(MhDate);

    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });

    const openChange = (newStatus) => {
      status.value = newStatus;
    };

    return {
      value,
      openChange,
      status,
      icon,
    };
  },
};
</script>
