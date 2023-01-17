<template>
  <base-card class="rounded-lg">
    <picture>
      <source
        sizes="(min-width: 347px)"
        type="image/avif"
        :srcset="`avif/original/${src}.avif 1900w, avif/1280/${src}.avif 1280w, avif/640/${src}.avif 640w`"
      />
      <source
        sizes="(min-width: 347px)"
        type="image/webp"
        :srcset="`webp/original/${src}.webp 1900w, webp/1280/${src}.webp 1280w, webp/640/${src}.webp 640w`"
      />
      <img
        class="w-full h-auto"
        decoding="async"
        loading="lazy"
        width="1256"
        height="1004"
        alt="Code for the sake of showing some of my skills."
        :srcset="`images/original/${src}.jpg 1900w, images/1280/${src}.jpg 1280w, images/640/${src}.jpg 640w`"
      />
    </picture>
    <card-text class="flex flex-col px-5 mt-3">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <p class="h-32 overflow-hidden">
        {{ description }}
      </p>
      <div>
        <a :href="siteUrl" class="flex">
          <SocialIconsBase
            class="mr-1"
            icon="mdiLink"
            :color="colorIcons"
            heigth="25px"
            width="25px"
          />
          <p>{{ $t("visit") }}</p>
        </a>
      </div>
    </card-text>
  </base-card>
</template>

<script>
export default {
  name: "CardProject",
  components: { SocialIconsBase },
  props: {
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    siteUrl: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      colorIcons: "",
    };
  },

  mounted() {
    this.getIconColors();

    setInterval(() => {
      this.getIconColors();
    }, 130);
  },

  methods: {
    getIconColors() {
      const theme = "default";
      const themes = [
        { value: "default", text: "Default", iconColor: "#33bebc" },
        { value: "crazy", text: "Crazy", iconColor: "#33bebc" },
        { value: "dark", text: "Dark", iconColor: "#cc925c" },
      ];
      themes.map((e) => {
        if (e.value === theme) {
          this.colorIcons = e.iconColor;
        }
        return 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.h-100px {
  height: 100px;
}
</style>
