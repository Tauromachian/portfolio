<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <textarea
      class="p-1 rounded shadow-lg no-outline"
      cols="10"
      rows="4"
      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  </div>
</template>

<script>
export default {
  name: 'BaseTextArea',
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
textarea {
  color: var(--text-color-gray-900)
}
</style>
