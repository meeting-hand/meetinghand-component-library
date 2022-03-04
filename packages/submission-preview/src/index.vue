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
      :keywordLabel="keywordLabel"
      :referenceLabel="referenceLabel"
      :authorStatus="authorStatus"
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
    keywordLabel: {
      type: String,
      default: "Keywords",
    },
    referenceLabel: {
      type: String,
      default: "References",
    },
    labels: {
      type: Object,
      default: {
        abstract: "Abstract",
        authors: "Authors",
        abstractFiles: "Abstract files",
        fileName: "Abstract File",
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
