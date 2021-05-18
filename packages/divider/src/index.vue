<template>
  <hr :class="[`size-${size}`]" />
</template>

<script>
export default {
  name: "Divider",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: (_v) =>
        ["normal", "thin", "medium", "bold", "xxbold"].includes(_v),
    },
  },
};
</script>

<style scoped>
.hr {
  width: 100%;
  border: none;
  background-color: #f1f1f1;
}
.size-thin {
  height: 1px;
}
.size-normal {
  height: 4px;
}
.size-medium {
  height: 8px;
}
.size-bold {
  height: 16px;
}
.size-xxbold {
  height: 47px;
}
</style>