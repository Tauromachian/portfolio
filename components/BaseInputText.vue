<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <input
      v-bind="$attrs"
      v-model="text"
      class="p-1 rounded no-outline input mt-0"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInputText",
  props: {
    label: {
      type: String,
      default: "input",
    },
    type: {
      type: String,
      default: "text",
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
input {
  color: var(--text-color-gray-900);
  outline: none;
  transition: all 0.1s;
  --shadow-color: #9ca3af;
  box-shadow: 6px 6px 0px 1px var(--shadow-color);
  margin-top: 0;
}

.input:focus {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 1px var(--shadow-color);
}
</style>
