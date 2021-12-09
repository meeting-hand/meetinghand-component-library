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

import TextPreview from "./types/textPreview.vue";
import FilePreview from "./types/filePreview.vue";

export default defineComponent({
  name: "SubmissionPreview",
  components: {
    TextPreview,
    FilePreview,
  },
  props: {
    type: {
      type: String,
      default: "textPreview",
      validator: (_v) => ["textPreview", "filePreview"].includes(_v),
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
