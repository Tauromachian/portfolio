<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <input
      class="p-1 rounded no-outline input"
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
  color: var(--text-color-gray-900);
  outline : none;
  transition: all 0.1s;
  --shadow-color: #9ca3af ;
  box-shadow: 6px 6px 0px 1px var(--shadow-color);
}

.input:focus {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 1px var(--shadow-color);
}
</style>
