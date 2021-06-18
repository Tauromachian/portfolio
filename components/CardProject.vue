<template>
  <base-card class="shadow-lg rounded-lg">
    <img :src="src" class="shadow max-w-full h-auto align-middle border-none rounded-t-lg">
    <card-text class="flex flex-col px-5 mt-3">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
      <a :href="siteUrl">
        <base-button class="mt-8 mb-6 self-start">
          Visit site
        </base-button>
      </a>
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
