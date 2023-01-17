<template>
  <section id="home" class="flex flex-col lg:flex-row mb-32 p-3 relative">
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
      <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
        <a>
          <base-button
            class="mt-12 relative w-full md:w-unset"
            is-call-to-action
            @click="scrollToPosition('portfolio')"
          >
            <div class="w-full h-full" />
            <SocialIconsBase
              class="absolute left-5 top-5"
              height="30px"
              width="30px"
              icon="mdiEye"
            />
            <span class="mx-2" />
            {{ $t("hero.button1") }}
          </base-button>
        </a>
        <a>
          <base-button
            class="mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2 relative w-full md:w-unset"
            is-call-to-action
            outline
            @click="scrollToPosition('social-networks')"
          >
            <div class="w-full h-full" />
            <SocialIconsBase
              class="absolute left-5 top-5"
              height="30px"
              width="30px"
              icon="mdiEmail"
              :color="colorIcons"
            />
            <span class="mx-2" />
            {{ $t("hero.button2") }}
          </base-button>
        </a>
      </div>
    </div>
    <div
      class="flex flex-col mt-10 md:mt-0 h-full justify-center hero__code lg:max-w-lg xl:max-w-max"
    >
      <div>
        <picture>
          <source
            sizes="(min-width: 347px)"
            type="image/avif"
            srcset="avif/1280/code.avif 1280w, avif/640/code.avif 640w"
          />
          <source
            type="image/webp"
            srcset="webp/1280/code.webp 1280w, webp/640/code.webp 640w"
          />
          <div class="perspective">
            <img
              class="w-full h-auto rotation-effect"
              width="1256"
              height="1004"
              alt="Code for the sake of showing some of my skills."
              srcset="images/1280/code.png 1280w, images/640/code.png 640w"
            />
          </div>
        </picture>
      </div>
    </div>

    <SocialIconsBase
      class="scroll-icon invisible xl:visible ml-2"
      width="60px"
      height="60px"
      icon="arrow-down"
      :color="colorIcons"
    />
  </section>
</template>

<script>
import SocialIconsBase from "../static/icons/SocialIconsBase.vue";

export default {
  name: "SectionHero",
  components: { SocialIconsBase },
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

<style scoped>
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
  bottom: 0;
  left: 0;
  font-size: 4rem;
}
.perspective {
  perspective: 1000px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
}
.rotation-effect {
  transform-style: preserve-3d;
  margin-top: 20px;
  box-shadow: 20px 20px 30px black;
  transform: rotateY(-30deg);
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
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
