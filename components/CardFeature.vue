<template>
  <div class="flex md:flex-col items-center">
    <SocialIconsBase :icon="icon" width="95px" height="95px" :color="color" />
    <div class="flex flex-col md:items-center">
      <h3 class="font-bold">
        {{ title }}
      </h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
