<template>
  <div class="flex md:flex-col items-center">
    <div>
      <SocialIconsBase :icon="icon" width="85px" height="85px" :color="color" />
    </div>
    <div class="flex flex-col md:items-center ml-5 md:ml-0">
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
