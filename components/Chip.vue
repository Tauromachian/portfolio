<template>
  <span class="rounded-lg p-2 bg-gray-200">{{ text }}</span>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  height: min-content;
}
</style>
