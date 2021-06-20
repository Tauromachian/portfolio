<template>
  <div
    class="list-item"
    :class="{ 'bg-gray-100': active }"
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
.list-item {
  cursor: pointer;
  color: var(--text-color-gray-900);
}
</style>
