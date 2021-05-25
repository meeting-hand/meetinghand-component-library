<template>
  <!-- Undo, redo and table buttons will be added -->
  <!-- undo, redo bold, italic, underline, strike, blockquote, link, image, table, code-block -->
  <div
    :class="[{ error: hasError }, 'mh-text-editor', { disabled: hasDisabled }]"
  >
    <quill-editor
      :toolbar="toolbar"
      :placeholder="placeholder"
      v-model:content="value"
      contentType="html"
    >
    </quill-editor>
    <div class="editor-footer" v-if="maxWordCount">
      {{ wordCount }} / {{ maxWordCount }}
    </div>
  </div>
  <span v-if="errorMessage" class="mh-input__error">
    {{ errorMessage }}
  </span>
</template>

<script>
import MhIcon from "@meetinghand/style/icons/index";
import { QuillEditor, Quill } from "@vueup/vue-quill";
import MhEditorIcons from "./assets/icons";

export default {
  name: "TextEditor",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
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
    toolbar: {
      type: Array,
      default() {
        return ["undo", "redo", "bold", "italic"];
      },
    },
    maxWordCount: {
      type: Number,
    },
  },
  components: {
    QuillEditor,
    MhIcon,
  },
  computed: {
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

    icons["bold"] = MhEditorIcons.bold;
    icons["italic"] = MhEditorIcons.italic;
    icons["underline"] = MhEditorIcons.underline;
    icons["undo"] = MhEditorIcons.undo;
    icons["redo"] = MhEditorIcons.redo;
    icons["strike"] = MhEditorIcons.strike;
    icons["link"] = MhEditorIcons.link;
    icons["blockquote"] = MhEditorIcons.blockquote;
    icons["image"] = MhEditorIcons.image;
    icons["table"] = MhEditorIcons.table;
    icons["code-block"] = MhEditorIcons.codeblock;
    icons["ordered"] = MhEditorIcons.ordered;
  },
};
//[
//   [
//     toolbarButton.undo,
//     toolbarButton.redo,
//     toolbarButton.bold,
//     toolbarButton.italic,
//     toolbarButton.underline,
//     toolbarButton.strike,
//     toolbarButton.blockquote,
//     toolbarButton.link,
//     toolbarButton.image,
//     toolbarButton.table,
//     toolbarButton.codeblock,
//   ],
//   [{ align: null }, { align: toolbarButton.align }, { align: 'right' }],
//   [{ list: 'ordered' }, { list: 'bullet' }],
//   [{ script: 'sub' }, { script: 'super' }],
// ]
</script>