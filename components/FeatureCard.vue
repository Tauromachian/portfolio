<template>
  <div class="flex">
    <span class="mdi text-7xl mr-1.5 color-primary md:text-8xl" :class="icon" />
    <div class="flex flex-col">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      default: 'Lorem'
    },
    icon: {
      type: String,
      default: 'mdi-emoticon'
    }
  }

}
</script>

<style lang="scss" scoped></style>
