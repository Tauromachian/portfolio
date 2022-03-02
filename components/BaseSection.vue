<template>
  <section class="flex flex-col my-32 p-3">
    <h1 class="mb-3 text-3xl text-5xl self-start sm:self-center" :class="titleAlignment">
      {{ title }}
    </h1>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
  props: {
    title: {
      type: String,
      required: true
    },
    titleAlignment: {
      type: [String],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
