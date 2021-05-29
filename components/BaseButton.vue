<template>
  <button
    class="rounded-lg p-2 bg-gray-200 no-outline"
    :class="buttonClasses"
    @click="$emit('click')"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    isActivable: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: false
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
      const classes = {
        'bg-green-400': this.isActive,
        'hover:bg-green-400': this.isActive
      }
      if (this.icon) {
        classes.padding = 0
        classes.transparent = true
      }
      return classes
    }
  }
}
</script>

<style scoped>
.no-outline {
  outline: none;
}
.transparent {
  background-color: transparent !important;
}
</style>
