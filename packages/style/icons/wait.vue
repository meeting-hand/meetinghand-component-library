<template>
  <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.94118 1C9.83966 1 13 4.13401 13 8C13 11.866 9.83966 15 5.94118 15C4.01733 15 2.27324 14.2368 1 12.999"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>
<style lang="scss" scoped>
.wait__spinner {
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