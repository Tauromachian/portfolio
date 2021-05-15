<template>
  <button
    class="rounded-lg p-2 bg-gray-200"
    :class="buttonClasses"
    @click="isActive = !isActive"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    text: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    },
    isActivable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isActive: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    buttonClasses () {
      if (!this.isActivable) { return {} }
      return {
        'bg-green-400': this.isActive,
        'hover:bg-green-500': this.isActive
      }
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  height: min-content;
}
</style>
