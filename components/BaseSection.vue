<template>
  <section class="flex flex-col mt-14 mb-14 p-3">
    <h1 class="mb-3 text-3xl text-5xl self-start sm:self-center">
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
