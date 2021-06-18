<template>
  <base-card class="shadow rounded">
    <img :src="src" class="shadow max-w-full h-auto align-middle border-none rounded-t">
    <card-text class="flex flex-col">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
      <base-button class="mt-6 self-start">
        Visit site
      </base-button>
    </card-text>
  </base-card>
</template>

<script>
export default {
  name: 'CardPortfolio',
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    siteUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
