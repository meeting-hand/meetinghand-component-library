<template>
  <div :class="[`size-${size}`]">
    <p :class="[`font-${size}`]">
      Lorem ipsum dolor sit amet, orbi vitae faucibus enim.
    </p>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    size: {
      type: String,
      default: "large",
      validator: (_v) => ["large", "small"].includes(_v),
    },
  },
};
</script>

<style scoped>
</style>