<template>
  <div class="list-item self-start align-left" @click="click">
    <slot class="text-base" />
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
  color: var(--text-color-gray-900)
}
</style>
