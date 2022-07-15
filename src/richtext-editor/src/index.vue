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
        api-key="009kx8n78zv67cnjbxjtr879m76r37n9od3j1ozckgu9tx9x"
        :ref="elementRef"
        :init="{
          height: 500,
          menubar: false,
          plugins: [
            'a11ychecker',
            'advlist',
            'advcode',
            'advtable',
            'autolink',
            'checklist',
            'export',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'powerpaste',
            'fullscreen',
            'formatpainter',
            'insertdatetime',
            'media',
            'table',
            'help',
          ],
          toolbar: toolbar,
          images_upload_handler: imageUploadHandler,
          paste_as_text: true,
          file_picker_types: 'image',
          setup: editorSetup,
          readonly: readOnly,
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
import { computed } from "vue";

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
        "undo redo code format alignment bold italic underline strikethrough bullist numlist link image table forecolor backcolor removeformat variables alignleft aligncenter alignright alignjustify",
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
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

    const imageUploadHandler = (blobInfo, success, failure, progress) => {
      imageUpload(
        props.imageUploadUrl,
        props.bearerToken,
        blobInfo,
        success,
        failure,
        progress
      );
    };

    const editorSetup = (editor) => {
      //console.log("SETUP =>", editor);
    };

    return {
      errorStatus,
      value,
      wordCount,
      imageUploadHandler,
      editorSetup,
    };
  },
};
</script>
<style>
.tox-statusbar__branding {
  display: none;
}
</style>
