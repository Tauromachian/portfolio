<template>
  <a
    class="mt-1 px-2"
  >
    <span v-if="icon" class="mdi mdi-link" />
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'lorem ipsum'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
