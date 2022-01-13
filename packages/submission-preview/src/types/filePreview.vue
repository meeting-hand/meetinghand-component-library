<template>
  <div class="abstract-file-preview">
    <div class="file-preview-header abstract-bb">
      <p>{{ title }}</p>
    </div>
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
    <div class="abstract-files abstract-bb">
      <h2 class="file-preview-title">{{ labels.abstractFiles }}</h2>
      <div class="file-row" v-for="(file, index) in body" :key="index">
        <mh-button type="list" icon="system-attachment" v-if="file.value">
          <a
            :href="typeof file.value === 'string' ? file.value : null"
            target="_blank"
          >
            {{ labels.fileName }} {{ index + 1 }}
          </a>
        </mh-button>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";

import MhButton from "@meetinghand/button";
import MhIcon from "@meetinghand/style/icons/index.vue";

export default defineComponent({
  components: {
    MhButton,
    MhIcon,
  },
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
        fileName: "Abstract File",
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
      return a.order - b.order;
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
          location: [_a?.institution, _a?.city, _a?.country]
            .filter((_l) => typeof _l === "string")
            .join(", "),
        };
      });

    return {
      authorList,
      authorLocations,
    };
  },
});
</script>

