<template>
  <div
    class="rounded-lg p-2"
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
