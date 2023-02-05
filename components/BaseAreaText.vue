<template>
  <div class="flex" :class="{ 'flex-col': col }">
    <label>{{ label }}</label>
    <textarea
      v-model="text"
      class="p-1 rounded no-outline textarea text"
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
