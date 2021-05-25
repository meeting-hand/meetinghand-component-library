<template>
  <!-- Undo, redo and table buttons will be added -->
  <div class="mh-text-editor">
    <quill-editor
      :toolbar="[
        [
          'undo',
          'redo',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'link',
          'image',
          'table',
          'code-block',
        ],
        [{ align: null }, { align: 'center' }, { align: 'right' }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
      ]"
      :placeholder="placeholder"
    >
    </quill-editor>
  </div>
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
  },
  components: {
    QuillEditor,
    MhIcon,
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
    icons["bullet"] = MhEditorIcons.bullet;
  },
};
</script>

<style >
</style>
