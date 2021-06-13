<template>
  <div class="flex flex-col mt-14 mb-14 p-3">
    <h1 class="mb-3 text-3xl md:text-4xl">
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
