<template>
  <nav class="flex flex-col">
    <div class="relative flex flex-col items-center">
      <div
        class="links flex flex-col items-center justify-center text-center bg-primary px-10 pt-2 rounded-t-md"
        :class="{ 'links--hidden': isHidden }"
      >
        <ul>
          <li
            v-for="link in links"
            :key="link.link + link.text"
            class="navbar__link py-3"
            @click.prevent="scrollToPosition(link.link)"
          >
            <a :href="link.link" class="text-xl">
              {{ $t(link.text) }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="buttons flex justify-center bg-primary px-3 text-2xl">
      <base-button class="navbar__link" icon @click="changeLocal">
        <img
          src="icons/translate.svg"
          width="30px"
          height="30px"
          alt="Translate icon"
        />
      </base-button>
      <base-menu bottom="3rem">
        <template #activator="{ on }">
          <base-button class="navbar__link" icon v-on="on">
            <img
              src="icons/invert-colors.svg"
              width="30px"
              height="30px"
              alt="Color themes selector icon"
            />
          </base-button>
        </template>
        <theme-selector v-model="theme" :themes="themes" />
      </base-menu>
      <base-button class="navbar__link" icon @click="isHidden = !isHidden">
        <img
          src="icons/menu.svg"
          width="30px"
          height="30px"
          alt="Hamburger menu icon"
        />
      </base-button>
    </div>
  </nav>
</template>

<script>
import BaseButton from "./BaseButton";

export default {
  name: "BottomNav",
  components: {
    BaseButton,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    themes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isHidden: true,
      theme: "default",
    };
  },

  watch: {
    theme(val) {
      this.setTheme(val);
    },
  },
  methods: {
    changeLocal() {
      this.$i18n.locale === "en"
        ? this.$i18n.setLocale("es")
        : this.$i18n.setLocale("en");
    },
    scrollToPosition(postitionId) {
      const elmnt = document.getElementById(postitionId.split("#").pop());
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
    setTheme(val) {
      this.$emit("change:theme", val);
    },
  },
};
</script>

<style lang="scss" scoped>
app-links li {
  display: inline;
}

.buttons {
  z-index: 20;
}

.links {
  position: absolute;
  transition: all 0.3s linear;
  z-index: 10;
  bottom: 0;
}

.links--hidden {
  bottom: -250px;
}
</style>
