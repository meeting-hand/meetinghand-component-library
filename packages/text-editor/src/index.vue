<template>
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
        [{ align: 'center' }],
        'picker-item',

        'clean',
        'code-block',
      ],
    ]"
  >
  </quill-editor>
</template>

<script>
import MhIcon from "@meetinghand/style/icons/index";

import { QuillEditor, Quill } from "@vueup/vue-quill";

import MhEditorIcons from "./assets/icons";

export default {
  name: "TextEditor",
  props: {},
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
    const undo = () => {
      self.editor.history.undo();
    };
    return {
      undo,
    };
  },
};
</script>

<style>
svg {
  fill: #000;
}
</style>
