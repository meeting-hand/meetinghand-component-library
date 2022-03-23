<template>
  <div class="question question-file">
    <p class="file-upload-title">File Upload</p>
    <transition name="fade" mode="out-in">
      <div v-if="!value" class="file-upload-wrapper">
        <div
          class="file-upload-button file-button"
          @click="onFileUploadClick()"
        >
          <mh-icon name="system-attachment" />
          <span>
            {{ question.label }}
          </span>
        </div>
        <input
          type="file"
          style="opacity: 0; position: absolute"
          :accept="acceptedTypes()"
          ref="fileInput"
          @change="onChangeFileUpload($event)"
        />
      </div>
      <div v-else class="file-upload-wrapper">
        <div class="file-download-button file-button">
          <mh-icon name="ui-check" />
          {{ value.name || question.label }}
          <a
            :href="value"
            v-if="typeof value === 'string' && isFilePath()"
            target="_blank"
          >
          </a>
        </div>
        <mh-button type="iconic" @click="removeFile()" icon="ui-delete" />
      </div>
    </transition>
    <span v-if="errorMessage" class="mh-input__error">{{ errorMessage }}</span>
  </div>
</template>
<script>
import { ref, inject } from "vue";

import MhInput from "@meetinghand/input/src/index.vue";
import MhButton from "@meetinghand/button";
import MhIcon from "@meetinghand/style/icons/index.vue";

import { questionValidation } from "../composables/validations";

export default {
  components: {
    MhInput,
    MhButton,
    MhIcon,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    deep: {
      type: Number,
      default: 1,
    },
    fieldPrefix: {
      type: String,
      default: null,
    },
  },
  emits: ["update:question"],
  setup(props, { emit }) {
    const maxFileSize = inject("maxFileSize");

    const { value, errorMessage } = questionValidation(
      props.question,
      props.fieldPrefix
    );

    const fileInput = ref(null);

    const onFileUploadClick = () => {
      fileInput.value.click();
    };

    const onChangeFileUpload = (e) => {
      if (e.target.files[0].size > maxFileSize) {
        alert(`Your file must be less than ${maxFileSize / 1000000} MegaByte`);
        e.target.value = null;
        return;
      }
      updateValue(e.target.files[0]);
    };

    const isFilePath = () =>
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        value.value
      );

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

      return acceptedExtensions.flat();
    };

    const removeFile = () => {
      updateValue(null);
    };

    const updateValue = (data) => {
      value.value = data;
    };

    return {
      onFileUploadClick,
      onChangeFileUpload,
      fileInput,
      acceptedTypes,
      removeFile,
      updateValue,
      isFilePath,
      value,
      errorMessage,
    };
  },
};
</script>

