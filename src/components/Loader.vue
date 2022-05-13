<template>
  <div :class="['isSmall' ? 'small' : 'large', 'loader']"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
.small {
  width: 64px;
  height: 64px;
  border: 8px solid;
  position: absolute;
  top: 70%;
  left: 45%;
  transform: translate(-50%, -50%);
}
.loader {
  border-top-color: var(--app-left-top-color);
  border-right-color: var(--app-right-left-color);
  border-bottom-color: var(--app-left-top-color);
  border-left-color: var(--app-right-left-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
