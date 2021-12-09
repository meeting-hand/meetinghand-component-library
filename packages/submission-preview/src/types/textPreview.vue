<template>
  <div class="abstract-text-preview">
    <h3>{{ topic }}</h3>
    <h1>{{ title }}</h1>
    <div class="abstract-flex-row">
      <div
        :class="[
          'abstract-authors-names',
          author.isPresenter ? 'presenter-author' : '',
        ]"
        v-for="(author, index) in authors"
        :key="index"
      >
        <p>{{ author.firstname }} {{ author.lastname }}</p>
        <sup v-if="authors.length > 1">{{ index + 1 }}</sup>
      </div>
    </div>
    <div class="abstract-flex-col">
      <div
        class="abstract-authors-info"
        v-for="(author, index) in authors"
        :key="index"
      >
        <sup v-if="authors.length > 1">{{ index + 1 }}</sup>
        <span>{{ author.institution }}</span>
        <span>{{ author.city }}</span>
        <span>{{ author.country }}</span>
      </div>
    </div>
    <div class="abstract-body">
      <h2>{{ labels.abstractBody }}</h2>
      <div
        class="abstract-body-content"
        v-for="(abstract, index) in body"
        :key="index"
      >
        <div v-html="abstract.value"></div>
      </div>
    </div>
    <div class="abstract-keywords" v-if="keywords">
      <p>{{ labels.keywords }}:</p>
      <span v-for="(keyword, index) in keywords" :key="index">
        {{ keyword }}
      </span>
    </div>
    <div class="abstract-references" v-if="references">
      <h2 class="file-preview-title">{{ labels.references }}:</h2>
      <ul>
        <li v-for="(reference, index) in references" :key="index">
          <span>
            {{ reference }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
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

