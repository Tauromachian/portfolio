<template>
  <div
    class="chip rounded-3xl py-2 px-4 text-xs"
    @click="$emit('click')"
  >
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.chip {
  background-color: var(--bg-card);
}
</style>
