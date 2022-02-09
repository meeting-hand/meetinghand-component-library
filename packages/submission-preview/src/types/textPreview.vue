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
        class="abstract-body-content"
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
import { defineComponent, nextTick, onBeforeMount, onMounted, ref } from "vue";

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
    const countryOptions = ref([]);
    let authorList = [];
    let lastNumber = 0;
    let authorLocations = ref([]);

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
      return a.order - b.order;
    });

    const fetchCountries = async () => {
      let countries = [];
      try {
        const response = await fetch(
          "https://meetinghand.s3.eu-central-1.amazonaws.com/assets/resources/countries.json"
        );
        countries = await response.json();
      } catch (error) {
        console.warn(error);
      }
      authorLocations.value = authorList
        .filter(
          (_a, _i) =>
            _i ===
              authorList.findIndex(
                (__a) => __a.authorNumber === _a.authorNumber
              ) && _a.authorNumber > 0
        )
        .map((_a) => {
          const country = countries.find(
            (_c) =>
              _a?.country && _c.code.toUpperCase() === _a.country.toUpperCase()
          );
          if (country) {
            _a.country = country.name;
          }
          return {
            authorNumber: _a.authorNumber,
            location: [_a?.institution, _a?.city, _a?.country]
              .filter((_l) => typeof _l === "string")
              .join(", "),
          };
        });
    };

    fetchCountries();

    return {
      authorList,
      authorLocations,
      countryOptions,
    };
  },
});
</script>

