<template>
  <button
    class="rounded-lg p-2 bg-primary no-outline"
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
        classes['icon-button'] = true
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

.icon-button {
  background-color: transparent !important;
  border-radius: 50%;
  height: 2.3em;
  width: 2.3em;
  padding: 0.5em;
  margin: 0.2em;
}
</style>
