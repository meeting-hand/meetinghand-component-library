<template>
  <div class="abstract-text-preview">
    <h3>{{ topic }}</h3>
    <h1>{{ title }}</h1>
    <div class="abstract-flex-row" v-if="authorStatus && authorList.length > 0">
      <div
        :class="[
          'abstract-authors-names',
          { 'presenter-author': author.isPresenter },
        ]"
        v-for="(author, index) in authorList"
        :key="index"
      >
        <p>{{ author.firstname }} {{ author.lastname }}</p>
        <sup v-if="author.authorNumber !== 0">{{ author.authorNumber }}</sup>
      </div>
    </div>
    <div class="abstract-flex-col" v-if="authorStatus && authorList.length > 0">
      <div
        class="abstract-authors-info"
        v-for="(authorLocation, index) in authorLocations"
        :key="index"
      >
        <sup>
          {{ authorLocation.authorNumber }}
        </sup>
        <span>{{ authorLocation.location }}</span>
      </div>
    </div>
    <div class="abstract-body">
      <div
        class="abstract-body-content ql-preview"
        v-for="(abstract, index) in body"
        :key="index"
      >
        <div v-html="abstract.value"></div>
      </div>
    </div>
    <div class="abstract-keywords" v-if="keywords && keywords.length > 0">
      <p>
        {{ keywordLabel }}:
        <span v-for="(keyword, index) in keywords" :key="index">
          {{ keyword }}
        </span>
      </p>
    </div>
    <div class="abstract-references" v-if="references && references.length > 0">
      <h2 class="file-preview-title">{{ referenceLabel }}:</h2>
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
import { defineComponent, ref } from "vue";

import { fetchCountries, sortAuthors } from "../composables/author";

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
      },
    },
  },
  setup(props) {
    let authorList = [];
    let lastNumber = 0;
    let authorLocations = ref([]);

    sortAuthors(props.authors, authorList, lastNumber);

    fetchCountries(authorLocations, authorList);

    return {
      authorList,
      authorLocations,
    };
  },
});
</script>

