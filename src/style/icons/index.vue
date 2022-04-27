<template>
  <inline-svg
    :src="svgUrl"
    :class="['mh-icon', `mh-icon-${name}`]"
  ></inline-svg>
</template>
<script lang="ts">
import InlineSvg from "vue-inline-svg";
import { computed, defineComponent } from "vue";

export default defineComponent({
  components: {
    InlineSvg,
  },
  props: {
    name: {
      type: String,
    },
  },
  setup(props) {
    const svgUrl = computed(
      () => new URL(`./icon-${props.name}.svg`, import.meta.url).href
    );
    return { svgUrl };
  },
});
</script>
<style lang="scss" scoped>
.wait-spinner {
  animation: rotate 01s linear infinite;
  width: 14px;
  height: 14px;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>

