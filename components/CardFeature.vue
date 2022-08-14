<template>
  <div class="flex md:flex-col items-center">
    <img :src="`/icons/${icon}.svg`" alt="" width="95px" height="95px">
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
