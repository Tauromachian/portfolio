<template>
  <base-card class="rounded-lg">
    <img :src="src" class="max-w-full h-auto align-middle border-none rounded-t-lg">
    <card-text class="flex flex-col px-5 mt-3">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <p class="h-28 overflow-hidden">
        {{ description }}
      </p>
      <div>
        <base-link class="mt-1" :href="siteUrl" :text="$t('visit')" icon />
      </div>
    </card-text>
  </base-card>
</template>

<script>
export default {
  name: 'CardProject',
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
.h-100px {
  height: 100px;
}
</style>
