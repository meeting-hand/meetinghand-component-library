<template>
  <div class="mh-progress-bar-container">
    <div class="progress-bar" ref="progressBar"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, Ref, ref, watch } from "vue";

export default defineComponent({
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const progressInterval: Ref<any> = ref(null);
    const currentProgress = ref(0);
    const step = ref(0.9); // as the step gets smaller the progress slows down.
    const progressBar: Ref<any> = ref(null);

    const start = () => {
      progressBar.value.style.opacity = "1";
      progressInterval.value = setInterval(() => {
        currentProgress.value += step.value;
        const progress =
          Math.round(
            (Math.atan(currentProgress.value) / (Math.PI / 2)) * 100 * 1000
          ) / 1000;
        progressBar.value.style.width = `${progress}%`;
        if (progress >= 100) {
          clearInterval(progressInterval.value);
        } else if (progress >= 70) {
          step.value = 0.1;
        }
      }, 100);
    };

    const stop = () => {
      clearInterval(progressInterval.value);
      progressBar.value.style.opacity = "0";
      progressBar.value.style.width = "0";
      currentProgress.value = 0;
    };

    onMounted(() => {
      start();
      watch(
        () => props.status,
        (status) => {
          status ? start() : stop();
        }
      );
    });

    return {
      progressBar,
    };
  },
});
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
