<template>
  <div class="gradient" :style="{ height: `${height}em`, background: `linear-gradient(${degrees}, rgba(51,190,188,1) 0%, rgba(51,230,227,1) 37%, rgba(249,250,251,1) 100%)` }" />
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
  margin: -3.8em;
  background: rgb(51,190,188);
}
</style>
