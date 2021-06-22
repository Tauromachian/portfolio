<template>
  <div
    class="gradient"
    :style="{
      height: `${height}em`,
      background: `linear-gradient(${degrees}, var(--color-primary) 0%, var(--color-primary) 37%, var(--bg-color-primary) 100%)`
    }"
  />
</template>

<script>
export default {
  name: 'BaseGradient',
  props: {
    degrees: {
      type: String,
      default: '180deg'
    },
    height: {
      type: Number,
      default: 9
    }
  }
}
</script>

<style lang="scss" scoped>
.gradient {
  content: '';
  height: 9em;
  margin-bottom: -4em;
}
</style>
