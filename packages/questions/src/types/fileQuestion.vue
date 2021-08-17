<template>
  <div class="question question-file">
    <transition name="fade" mode="out-in">
      <div v-if="!question.value">
        <mh-button
          type="secondary"
          icon="ui-download-file"
          @click="onFileUploadClick()"
        >
          {{ question.label }}
        </mh-button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <input
          type="file"
          style="opacity: 0; position: absolute"
          :accept="acceptedTypes()"
          ref="fileInput"
          @change="onChangeFileUpload($event)"
        />
      </div>
      <div v-else>
        <mh-button
          type="secondary"
          color="red"
          @click="removeFile()"
          icon="system-close"
          >{{ question.value.name }}
        </mh-button>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref } from "vue";

import MhInput from "@meetinghand/input";
import MhButton from "@meetinghand/button";

export default {
  components: {
    MhInput,
    MhButton,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    errors: {
      type: Object,
      default: () => {},
    },
    deep: {
      type: Number,
      default: 1,
    },
  },
  emits: ["update:question"],
  setup(props, { emit }) {
    const fileInput = ref(null);

    const onFileUploadClick = () => {
      fileInput.value.click();
    };

    const onChangeFileUpload = (e) => {
      updateValue(e.target.files[0]);
    };

    const acceptedTypes = () => {
      let acceptedExtensions = [];

      const extension = {
        images: [".jpeg", ".jpg", ".gif", ".png", ".svg"],
        texts: [".doc", ".docx", ".odt", ".pdf"],
        spreadSheets: [".xls", ".xlsx", ".ods"],
        presentations: [".ppt", ".pptx", ".odp"],
        compresseds: [".zip", ".7zip", ".rar"],
      };

      if (props.question.fileAcceptImage) {
        acceptedExtensions.push(extension.images);
      }
      if (props.question.fileAcceptText) {
        acceptedExtensions.push(extension.texts);
      }
      if (props.question.fileAcceptSpreadsheet) {
        acceptedExtensions.push(extension.spreadSheets);
      }
      if (props.question.fileAcceptPresentation) {
        acceptedExtensions.push(extension.presentations);
      }
      if (props.question.fileAcceptCompressed) {
        acceptedExtensions.push(extension.compresseds);
      }

      if (
        [
          props.question.fileAcceptImage,
          props.question.fileAcceptText,
          props.question.fileAcceptSpreadsheet,
          props.question.fileAcceptPresentation,
          props.question.fileAcceptCompressed,
        ].every((_a) => !_a)
      ) {
        acceptedExtensions = [
          ...extension.images,
          ...extension.texts,
          ...extension.spreadSheets,
          ...extension.presentations,
          ...extension.compresseds,
        ];
      }

      return acceptedExtensions;
    };

    const removeFile = () => {
      updateValue(null);
    };

    const updateValue = (value) => {
      emit("update:question", {
        ...props.question,
        value,
      });
    };

    return {
      onFileUploadClick,
      onChangeFileUpload,
      fileInput,
      acceptedTypes,
      removeFile,
    };
  },
};
</script>

