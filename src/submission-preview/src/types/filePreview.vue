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
        <sup v-if="author.authorNumber !== 0 && authorNumberStatus">{{
          author.authorNumber
        }}</sup>
      </div>
    </div>
    <div class="abstract-flex-col" v-if="authorStatus && authorList.length > 0">
      <div
        class="abstract-authors-info"
        v-for="(authorLocation, index) in authorLocations"
        :key="index"
      >
        <sup v-if="authorLocation.authorNumber != 0 && authorNumberStatus">
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

<script lang="ts">
import { defineComponent, ref, computed, Ref } from "vue";

import {
  fetchCountries,
  sortAuthors,
  hasAuthorNumber,
} from "../composables/author";

import MhButton from "../../../button";
import MhIcon from "../../../style/icons";

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
      default: () => ({
        abstract: "Abstract",
        authors: "Authors",
        abstractFiles: "Abstract files",
        fileName: "Abstract File",
      }),
    },
  },
  setup(props) {
    let authorList: any[] = [];
    let lastNumber = 0;
    let authorLocations: Ref<any[]> = ref([]);

    sortAuthors(props.authors, authorList, lastNumber);

    fetchCountries(authorLocations, authorList);

    const authorNumberStatus = computed(() =>
      hasAuthorNumber(authorLocations.value)
    );

    return {
      authorList,
      authorLocations,
      authorNumberStatus,
    };
  },
});
</script>

