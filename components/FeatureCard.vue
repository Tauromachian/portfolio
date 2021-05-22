<template>
  <div class="flex md:flex-col items-center">
    <span class="mdi text-7xl mr-1.5 color-primary md:text-8xl md:mr-0" :class="icon" />
    <div class="flex flex-col md:items-center">
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
