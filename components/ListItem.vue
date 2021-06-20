<template>
  <div
    class="py-2 px-4 app-list-item"
    :class="{ 'bg-gray-200': active }"
    @click="click"
  >
    <slot class="text-base" />
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.app-list-item {
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-color-gray-900);
}

.app-list-item:hover {
  background-color: var(--color-gray-100);
}
</style>
