<template>
  <div class="py-3 px-2 flex flex-col card--glass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    glass: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card--glass {
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.card--glass:before {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  content: "";
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -10;
}
</style>
