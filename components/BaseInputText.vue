<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <input
      class="p-1 rounded"
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInputText',
  props: {
    label: {
      type: String,
      default: 'input'
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    col: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  color: var(--text-color-secondary)
}
</style>
