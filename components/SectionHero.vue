<template>
  <section class="flex flex-col lg:flex-row mb-32 p-3 relative">
    <div class="flex flex-col h-full justify-center hero__text md:mr-5 xl:mr-0">
      <h1 class="text-6xl xl:text-7xl 2xl:text-8xl">
        {{ $t("hero.title") }}
      </h1>
      <p class="mt-10 text-xl">
        <strong>
          {{ $t("hero.description1") }}
        </strong>
      </p>
      <p class="text-xl">
        <strong>
          {{ $t("hero.description2") }}
        </strong>
      </p>
      <div
        class="flex flex-col sm:flex-row lg:flex-col xl:flex-row max-w-sm sm:max-w-none"
      >
        <base-button-call-to-action
          download-link="/cv.pdf"
          class="mt-12 text-center"
          prepend-icon="mdiDownload"
          size="x-large"
        >
          {{ $t("hero.button1") }}
        </base-button-call-to-action>
        <base-button-call-to-action
          class="mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2"
          is-call-to-action
          outline
          prepend-icon="mdiEmail"
          size="x-large"
          @click="scrollToPosition('social-networks')"
        >
          {{ $t("hero.button2") }}
        </base-button-call-to-action>
      </div>
    </div>
    <div
      class="flex flex-col mt-10 md:mt-0 h-full justify-center hero__code lg:max-w-lg xl:max-w-max"
    >
      <picture class="picture">
        <source
          sizes="(min-width: 347px)"
          type="image/avif"
          srcset="/avif/1280/code.avif 1280w, /avif/640/code.avif 640w"
        />
        <source
          type="image/webp"
          srcset="/webp/1280/code.webp 1280w, /webp/640/code.webp 640w"
        />
        <img
          class="w-full h-auto image"
          width="1256"
          height="1004"
          alt="Code for the sake of showing some of my skills."
          srcset="/images/1280/code.png 1280w, /images/640/code.png 640w"
        />
      </picture>
    </div>

    <SocialIconsBase
      class="scroll-icon invisible xl:visible ml-2"
      width="60px"
      height="60px"
      icon="arrow-down"
    />
  </section>
</template>

<script>
export default {
  name: "SectionHero",
  data() {
    return {
      colorIcons: "",
      isHidden: true,
      theme: "default",
    };
  },
  created() {
    this.getIconColors();

    setInterval(() => {
      this.getIconColors();
    }, 130);
  },
  methods: {
    scrollToPosition(postitionId) {
      const elmnt = document.getElementById(postitionId.split("#").pop());
      elmnt.scrollIntoView({ behavior: "smooth" });
    },

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

<style scoped lang="scss">
@media screen and (min-width: 1024px) {
  section {
    height: calc(100vh - 64px);
  }
}

.code-handler-styles {
  border-radius: 10px;
}

.hero__text {
  flex-basis: 50%;
}

.hero__code {
  flex-basis: 50%;
}

.hero__code .code-toolbar {
  height: 100% !important;
}

.hero-content-last-name {
  margin-top: -0.25em;
}

.scroll-icon {
  animation: up-and-down 1s infinite ease-out;
  position: absolute;
  bottom: 0.4em;
  left: 0;
  font-size: 4rem;
}

.picture {
  transform-style: preserve-3d;
  margin-top: 20px;
  perspective: 1000px;

  .image {
    transform: rotateY(-30deg);
    box-shadow: 20px 20px 30px black;
  }
}

@keyframes up-and-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
