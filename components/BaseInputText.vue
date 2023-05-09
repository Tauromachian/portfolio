<template>
  <div class="flex">
    <label>{{ label }}</label>
    <input
      v-bind="$attrs"
      v-model="text"
      class="p-1 rounded no-outline mt-0 text"
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
