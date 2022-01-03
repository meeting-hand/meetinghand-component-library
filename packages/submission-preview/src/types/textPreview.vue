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
      <h2>{{ labels.abstractBody }}</h2>
      <div
        class="abstract-body-content"
        v-for="(abstract, index) in body"
        :key="index"
      >
        <div v-html="abstract.value"></div>
      </div>
    </div>
    <div class="abstract-keywords" v-if="keywords && keywords.length > 0">
      <p>{{ keywordLabel }}:</p>
      <span v-for="(keyword, index) in keywords" :key="index">
        {{ keyword }}
      </span>
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
import { computed, defineComponent } from "vue";

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
        abstractBody: "Abstract body",
        abstract: "Abstract",
        authors: "Authors",
        abstractFiles: "Abstract files",
      },
    },
  },
  setup(props) {
    let authorList = [];
    let lastNumber = 0;

    props.authors.forEach((author) => {
      if (author?.city || author?.country || author?.institution) {
        const previousItem = authorList.find(
          (_a, _i) =>
            [author.city, author.country, author.institution].toString() ===
            [_a.city, _a.country, _a.institution].toString()
        );
        if (previousItem) {
          author.authorNumber = previousItem.authorNumber;
        } else {
          author.authorNumber = lastNumber + 1;
          lastNumber++;
        }
      } else {
        author.authorNumber = 0;
      }
      authorList.push(author);
    });

    authorList = authorList.sort((a, b) => {
      if (a.authorNumber === 0) {
        return 1;
      } else if (b.authorNumber === 0) {
        return -1;
      }
      return a.authorNumber - b.authorNumber;
    });

    const authorLocations = authorList
      .filter(
        (_a, _i) =>
          _i ===
            authorList.findIndex(
              (__a) => __a.authorNumber === _a.authorNumber
            ) && _a.authorNumber > 0
      )
      .map((_a) => {
        return {
          authorNumber: _a.authorNumber,
          location: [_a?.city, _a?.country, _a?.institution]
            .filter((_l) => typeof _l === "string")
            .join(),
        };
      });

    return {
      authorList,
      authorLocations,
    };
  },
});
</script>

