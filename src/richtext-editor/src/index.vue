<template>
  <div class="mh-rich-text-editor">
    <label class="mh-text-editor-label" v-if="label">{{ label }}</label>
    <div
      :class="[
        { error: errorStatus },
        'mh-text-editor-container',
        { disabled: readOnly },
        'notranslate',
      ]"
    >
      <editor
        :tinymce-script-src="selfHostedUrl"
        :init="{
          height: 500,
          menubar: false,
          plugins:
            'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          toolbar: toolbar,
          images_upload_handler: imageUploadHandler,
          file_picker_types: 'image',
          //paste_as_text: true,
          paste_data_images: true,
          image_advtab: true,
          image_caption: true,
          setup: editorSetup,
          readonly: readOnly,
          color_map: [
            '#FFFFFF',
            '#FFFFFF',
            '#000000',
            '#000000',
            '#3FA0B5',
            '#3FA0B5',
            '#2A535D',
            '#2A535D',
            '#0EAD88',
            '#0EAD88',
            '#3F51B5',
            '#3F51B5',
            '#FF9800',
            '#FF9800',
            '#4CAF50',
            '#4CAF50',
            '#FFC700',
            '#FFC700',
            '#C336F4',
            '#C336F4',
            '#9C27B0',
            '#9C27B0',
            '#6421F3',
            '#6421F3',
            '#00D1FF',
            '#00D1FF',
            '#F44336',
            '#F44336',
          ],
          theme_advanced_font_sizes: '9px,10px,12px,14px,18px,24px,36px',
        }"
        v-model="value"
      />
      <div class="editor-footer" v-if="maxWordCount">
        {{ wordCount }} / {{ maxWordCount }}
      </div>
    </div>
    <span v-if="errorMessage" class="mh-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>
<script>
import { computed, ref } from "vue";

import Editor from "@tinymce/tinymce-vue";
import { imageUpload } from "./utils/imageUpload";

import "./assets/main.scss";

export default {
  name: "RichTextEditor",
  components: {
    Editor,
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    hasDisabled: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: false,
    },
    toolbar: {
      type: String,
      default:
        "undo redo | bold italic underline strikethrough | bullist numlist | link image table forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify code",
    },
    maxWordCount: {
      type: Number,
    },
    elementRef: {
      type: String,
      default: "MHEditor",
    },
    imageUploadUrl: {
      type: String,
      default:
        "https://meetinghand.xyz/api/events/lyk2-38cmuapqeh/submission/upload_image",
    },
    bearerToken: {
      type: String,
      default: null,
    },
  },
  emits: ["update:modelValue", "setEditorInstance"],
  setup(props, { emit }) {
    const selfHostedUrl =
      "https://s3.eu-central-1.amazonaws.com/meetinghand/assets/tinymce/tinymce.min.js";

    const errorStatus = computed(() => props.hasError || props.errorMessage);

    const value = computed({
      get() {
        return props.modelValue;
      },
      set(data) {
        emit("update:modelValue", data);
      },
    });

    const wordCount = computed(() => value.value.split(/\b\S+\b/).length - 1);

    const imageUploadHandler = (blobInfo, progress) =>
      imageUpload(props.imageUploadUrl, props.bearerToken, blobInfo, progress);

    const editorSetup = (editor) => {
      emit("setEditorInstance", editor);
    };

    return {
      errorStatus,
      value,
      wordCount,
      imageUploadHandler,
      editorSetup,
      selfHostedUrl,
    };
  },
};
</script>
<style>
.tox-statusbar__branding {
  display: none;
}
</style>
