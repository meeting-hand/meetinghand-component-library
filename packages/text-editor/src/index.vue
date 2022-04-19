 <template>
  <div class="mh-text-editor">
    <label class="mh-text-editor-label" v-if="label">{{ label }}</label>
    <div
      :class="[
        { error: errorStatus },
        'mh-text-editor-container',
        { disabled: readOnly },
        'notranslate',
      ]"
    >
      <div :id="elementRef" v-html="initialValue"></div>
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
import Quill from "quill";

import { defineComponent, onMounted, ref } from "vue";

import BlotFormatter from "quill-blot-formatter/dist/BlotFormatter";
//import { ImageDrop } from "quill-image-drop-module";
import ImageUploader from "quill-image-uploader";

Quill.register("modules/blotFormatter", BlotFormatter);
//Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageUploader", ImageUploader);

import MhEditorIcons from "./assets/icons";
import { debounce } from "lodash";
import { imageUpload } from "./utils/imageUpload";

export default defineComponent({
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
          { align: "left" },
          { align: "center" },
          { align: "right" },
          { list: "ordered" },
          { list: "bullet" },
          "code-block",
        ];
      },
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
        //"https://meetinghand.xyz/api/customer/events/30/website/upload_image",
        "https://meetinghand.xyz/api/events/lyk2-38cmuapqeh/submission/upload_image",
    },
    bearerToken: {
      type: String,
      default: null,
    },
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
  emits: ["update:modelValue", "setQuill"],
  setup(props, { emit }) {
    var icons = Quill.import("ui/icons");

    const initialValue = props.modelValue;

    icons.bold = MhEditorIcons.bold;
    icons.italic = MhEditorIcons.italic;
    icons.underline = MhEditorIcons.underline;
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

    const setupEditor = () => {
      var quill = new Quill(`#${props.elementRef}`, {
        theme: "snow",
        modules: {
          toolbar: props.toolbar,
          blotFormatter: {},
          //imageDrop: true,
          imageUploader: {
            upload: (file) =>
              imageUpload(file, props.imageUploadUrl, props.bearerToken),
          },
        },
        placeholder: props.placeholder,
      });

      emit("setQuill", quill);

      quill.on(
        "text-change",
        debounce(() => {
          if (document.getElementById(props.elementRef)) {
            emit(
              "update:modelValue",
              document
                .getElementById(props.elementRef)
                .getElementsByClassName("ql-editor")[0].innerHTML
            );
          }
        }, 100)
      );
    };

    onMounted(() => {
      setupEditor();
    });

    return {
      initialValue,
    };
  },
});
</script>
<style lang="scss">
@import "./assets/main.scss";
</style>
