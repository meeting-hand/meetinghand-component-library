<template>
  <div :class="[`size-${size}`]">
    <p :class="[`font-${size}`]">
      Lorem ipsum dolor sit amet, orbi vitae faucibus enim.
    </p>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
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
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: relative;
  /* Mono/Light-Grey-5 */
  border: 1.5px solid #dfdfdf;
  box-sizing: border-box;
  /* Box-Shadow-2 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}
.size-large {
  width: 224px;
  height: 64px;
}
.size-small {
  width: 190px;
  height: 48px;
}
p {
  position: static;
  left: 16px;
  top: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* Mono/Grey-3 */
  color: #565656;
}
.font-large {
  width: 192px;
  height: 32px;
}
.font-small {
  width: 158px;
  height: 16px;
}
</style>