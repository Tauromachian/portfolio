<template>
  <a class="mt-1 px-2">
    <span class="link">
      <span v-if="icon" class="mdi mdi-link" />
      {{ text }}
      <div />
    </span>
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'lorem ipsum'
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  width: auto;
  display: inline-block;
}

div {
  transition: all ease 0.2s;
  border-color: var(--text-color-primary);
  border-top: 1px solid;
  transform: scale(0);
}

.link:hover div {
  transform: scale(1);
}
</style>
