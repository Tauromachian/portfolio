<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <textarea
      v-model="text"
      class="p-1 rounded no-outline textarea"
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
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    text: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea {
  color: var(--text-color-gray-900);
  outline : none;
  transition: all 0.1s;
  --shadow-color: #9ca3af ;
  box-shadow: 6px 6px 0px 1px var(--shadow-color);
}

.textarea:focus {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 1px var(--shadow-color);
}
</style>
