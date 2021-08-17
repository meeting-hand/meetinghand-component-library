<template>
  <div class="question-text">
    <mh-button
      type="secondary"
      icon="ui-image-change"
      @click="onImageUploadClick()"
    >
      Upload
    </mh-button>
    <input
      type="file"
      style="opacity: 0; position: absolute"
      accept="image/*"
      ref="profileImageInput"
      @change="onChangeProfileImageUpload($event)"
    />
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
  },
  setup() {
    const profileImageInput = ref(null);

    const onImageUploadClick = () => {
      profileImageInput.value.click();
    };

    const onChangeProfileImageUpload = (e) => {
      const img = e.target.files[0];
    };

    return {
      onImageUploadClick,
      onChangeProfileImageUpload,
      profileImageInput,
    };
  },
};
</script>

