<template>
  <div class="mt-5 mb-5">
    <h1 class="mb-3 text-2xl md:text-4xl">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseSection',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
