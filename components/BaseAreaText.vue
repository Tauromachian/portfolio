<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <textarea
      v-model="text"
      class="p-1 rounded no-outline textarea"
      cols="10"
      rows="4"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    label: {
      type: String,
      default: "input",
    },
    col: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  computed: {
    text: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  color: var(--text-color-gray-900);
  outline: none;
  transition: all 0.1s;
  --shadow-color: #9ca3af;
  box-shadow: 6px 6px 0px 1px var(--shadow-color);
}

.textarea:focus {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 1px var(--shadow-color);
}
</style>
