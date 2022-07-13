<template>
  <div class="abstract-preview-content">
    <component
      :is="type"
      :topic="topic"
      :title="title"
      :authors="JSON.parse(JSON.stringify(authors))"
      :body="body"
      :keywords="keywords"
      :references="references"
      :labels="labels"
      :keywordLabel="keywordLabel"
      :referenceLabel="referenceLabel"
      :authorStatus="authorStatus"
      :presentationType="presentationType"
    />
  </div>
</template>

<script lang="ts">
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
      validator: (_v: string) => ["text", "file"].includes(_v),
    },
    topic: {
      type: String,
      default: null,
    },
    presentationType: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    authors: {
      type: Array as () => any[],
      default: [],
    },
    body: {
      type: Array as () => any[],
      default: [],
    },
    keywords: {
      type: Array as () => any[],
      default: [],
    },
    references: {
      type: Array as () => any[],
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
      type: Object as () => any,
      default: (): any => ({
        abstract: "Abstract",
        authors: "Authors",
        abstractFiles: "Abstract files",
        fileName: "Abstract File",
      }),
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
