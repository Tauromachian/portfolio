<template>
  <div class="rounded-3xl py-1 px-3 text-xs chip">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.chip {
  background-color: var(--bg-card);
}
</style>
