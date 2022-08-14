<template>
  <base-card class="rounded-lg">
    <picture>
      <source
        sizes="(min-width: 347px)"
        type="image/avif"
        :srcset="`avif/original/${src}.avif 1900w, avif/1280/${src}.avif 1280w, avif/640/${src}.avif 640w`"
      >
      <source
        sizes="(min-width: 347px)"
        type="image/webp"
        :srcset="`webp/original/${src}.webp 1900w, webp/1280/${src}.webp 1280w, webp/640/${src}.webp 640w`"
      >
      <img
        class="w-full h-auto"
        decoding="async"
        loading="lazy"
        width="1256"
        height="1004"
        alt="Code for the sake of showing some of my skills."
        :srcset="`images/original/${src}.jpg 1900w, images/1280/${src}.jpg 1280w, images/640/${src}.jpg 640w`"
      >
    </picture>
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
    },
    alt: {
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
