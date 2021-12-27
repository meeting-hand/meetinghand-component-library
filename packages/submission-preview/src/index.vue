<template>
  <div class="abstract-preview-content">
    <component
      :is="type"
      :topic="topic"
      :title="title"
      :authors="authors"
      :body="body"
      :keywords="keywords"
      :references="references"
      :labels="labels"
    />
  </div>
</template>

<script >
import { defineComponent } from "vue";

import Text from "./types/textPreview.vue";
import File from "./types/filePreview.vue";

export default defineComponent({
  name: "SubmissionPreview",
  components: {
    Text,
    File,
  },
  props: {
    type: {
      type: String,
      default: "text",
      validator: (_v) => ["text", "file"].includes(_v),
    },
    topic: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    authors: {
      type: Array,
      default: [],
    },
    body: {
      type: Array,
      default: [],
    },
    keywords: {
      type: Array,
      default: [],
    },
    references: {
      type: Array,
      default: [],
    },
    authorStatus: {
      type: Boolean,
      default: true,
    },
    labels: {
      type: Object,
      default: {
        abstractBody: "Abstract body",
        keywords: "Keywords",
        references: "References",
        abstract: "Abstract",
        authors: "Authors",
        abstractFiles: "Abstract files",
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
