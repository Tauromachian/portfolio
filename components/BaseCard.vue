<template>
  <div class="flex flex-col" :class="{ card: !transparent }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    glass: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--bg-card);
  border-radius: 10px;
}
</style>
