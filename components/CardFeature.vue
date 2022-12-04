<template>
  <div class="flex md:flex-col items-center">
    <SocialIconsBase :icon="icon" width="95px" height="95px" :color="color" />
    <div class="flex flex-col md:items-center">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <slot />
    </div>
  </div>
</template>

<script>
import SocialIconsBase from '../static/icons/SocialIconsBase.vue'

export default {
  name: 'FeatureCard',
  components: { SocialIconsBase },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    color: String
  }
}
</script>

<style lang="scss" scoped></style>
