<template>
  <div
    class="list-item self-start align-left"
    :class="{ 'bg-gray-100': active }"
    @click="click"
  >
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
  },
  active: {
    type: Boolean,
    default: false
  }
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
  color: var(--text-color-gray-900);
}
</style>
