<template>
  <div class="abstract-file-preview">
    <div class="file-preview-header abstract-bb">
      <h2 class="file-preview-title">{{ labels.abstract }}</h2>
      <p>{{ title }}</p>
    </div>
    <div class="file-preview-authors abstract-bb">
      <h2 class="file-preview-title">{{ labels.authors }}</h2>
      <div
        class="author-row disc-list"
        v-for="author in authors"
        :key="author.id"
      >
        <ul>
          <li>
            <p>{{ author.firstname }} {{ author.lastname }}</p>
            <div class="author-info">
              <span v-if="author.institution">{{ author.institution }} </span>
              <span v-if="author.city"> {{ author.city }}</span>
              <span v-if="author.country">{{ author.country }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="abstract-files abstract-bb">
      <h2 class="file-preview-title">{{ labels.abstractFiles }}</h2>
      <div class="file-row" v-for="(file, index) in body" :key="index">
        <mh-button type="list" icon="system-attachment" v-if="file.value">
          {{ file.value.name }}
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
  setup() {},
});
</script>

