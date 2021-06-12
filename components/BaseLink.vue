<template>
  <a class="mt-1 px-2">
    <span class="link">
      <span v-if="icon" class="mdi mdi-link" />
      {{ text }}
      <hr>
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
  transition: all linear 1s;
  width: auto;
  display: inline-block;
}

hr {
  transition: width linear 0.2s;
  border-color: var(--text-color-primary);
  width: 0%;
}

.link:hover > hr {
  width: 100%;
}
</style>
