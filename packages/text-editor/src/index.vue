<template>
  <div class="mh-text-editor">
    <label class="mh-text-editor-label" v-if="label">{{ label }}</label>
    <div
      :class="[
        { error: errorStatus },
        'mh-text-editor-container',
        { disabled: readOnly },
      ]"
    >
      <quill-editor
        :toolbar="toolbar"
        :placeholder="placeholder"
        contentType="html"
        :readOnly="readOnly"
        :modules="toolbar.some((_t) => _t === 'image') ? modules : null"
        v-model:content="value"
        :ref="'_' + Math.random().toString(36).substr(2, 9)"
      >
      </quill-editor>
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
import { QuillEditor, Quill } from "@vueup/vue-quill";
import QuillImageDropAndPaste from "quill-image-drop-and-paste";
import BlotFormatter from "quill-blot-formatter/dist/BlotFormatter";
import MhEditorIcons from "./assets/icons";

export default {
  name: "TextEditor",
  data() {
    return {};
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
    hasDisabled: {
      type: Boolean,
      default: false,
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
      type: Array,
      default() {
        return [
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "link",
          "image",
          //"table",
          { align: "left" },
          { align: "center" },
          { align: "right" },
          { list: "ordered" },
          { list: "bullet" },
          "code-block",
          // { script: "sub" },
          // { script: "super" },
        ];
      },
    },
    maxWordCount: {
      type: Number,
    },
  },
  components: {
    QuillEditor,
  },
  computed: {
    errorStatus: function (props) {
      return props.hasError || props.errorMessage;
    },
    value: {
      get() {
        return this.modelValue;
      },
      set(data) {
        this.$emit("update:modelValue", data);
      },
    },
    wordCount() {
      return this.value.split(/\b\S+\b/).length - 1;
    },
  },
  setup() {
    var icons = Quill.import("ui/icons");

    icons.bold = MhEditorIcons.bold;
    icons.italic = MhEditorIcons.italic;
    icons.underline = MhEditorIcons.underline;
    // icons.undo = MhEditorIcons.undo;
    // icons.redo = MhEditorIcons.redo;
    icons.strike = MhEditorIcons.strike;
    icons.link = MhEditorIcons.link;
    icons.blockquote = MhEditorIcons.blockquote;
    icons.image = MhEditorIcons.image;
    icons.table = MhEditorIcons.table;
    icons["code-block"] = MhEditorIcons.codeblock;
    icons.list.ordered = MhEditorIcons.ordered;
    icons.list.bullet = MhEditorIcons.bullet;

    icons.align.center = MhEditorIcons.center;
    icons.align.left = MhEditorIcons.left;
    icons.align.right = MhEditorIcons.right;
    icons.script.sub = MhEditorIcons.sub;
    icons.script.super = MhEditorIcons.super;

    const modules = [
      {
        name: "QuillImageDropAndPaste",
        module: QuillImageDropAndPaste,
      },
      {
        name: "BlotFormatter",
        module: BlotFormatter,
      },
    ];

    return {
      modules,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
