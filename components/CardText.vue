<template>
  <div class="py-3 px-2" :class="{ 'no-padding': noPadding }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    noPadding: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.no-padding {
  padding: 0 !important;
}
</style>
