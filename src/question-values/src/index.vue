<template>
  <div class="questions-value-wrapper">
    <div class="question-row" v-for="question in questions" :key="question.id">
      <component
        :is="question.type"
        :question="question"
        v-if="question.value"
      />
      <no-answer :question="question" v-else />
    </div>
  </div>
</template>
<script lang="ts">
import { provide, readonly, defineComponent } from "vue";

import NoAnswer from "./noAnswer.vue";
import Text from "./types/text.vue";
import Number from "./types/number.vue";
import Email from "./types/email.vue";
import Textarea from "./types/textarea.vue";
import Tel from "./types/tel.vue";
import File from "./types/file.vue";
import Datepicker from "./types/datepicker.vue";
import Country from "./types/country.vue";
import Information from "./types/information.vue";
import Radio from "./types/radio.vue";
import Select from "./types/select.vue";
import Checkbox from "./types/checkbox.vue";

export default defineComponent({
  name: "QuestionValues",
  components: {
    NoAnswer,
    Text,
    Number,
    Email,
    Textarea,
    Tel,
    File,
    Datepicker,
    Country,
    Information,
    Radio,
    Select,
    Checkbox,
  },
  props: {
    questions: {
      type: Array as () => any[],
      default: [],
    },
    questionSetupData: {
      type: Array as () => any[],
      default: [],
    },
    dateFormat: {
      type: String,
      default: "US",
      validator: (value: string) => ["EU", "US"].includes(value),
    },
  },
  setup(props) {
    provide("questionSetupData", readonly(props.questionSetupData));
    provide("dateFormat", props.dateFormat);
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
