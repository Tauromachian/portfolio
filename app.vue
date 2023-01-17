<template>
  <div>
    <header>
      <base-gradient v-if="isSmallScreen" degrees="180deg" :height="6" />
      <div v-if="isSmallScreen" class="top-gradient" />
      <top-nav
        @change:theme="theme = val"
        v-if="!isSmallScreen"
        class="invisible sm:visible top-0 left-0 right-0"
      />
    </header>
    <div class="container mx-auto">
      <section-hero />

      <section-about />

      <section-skills />

      <section-projects />

      <section-contacts />

      <section-repositories />
    </div>
    <bottom-nav
      @change:theme="theme = val"
      :links="links"
      :themes="themes"
      class="sm:invisible fixed bottom-0 left-0 right-0 z-50"
    />
    <div class="mt-20 pt-10 sm:mt-0 content" />
    <vue-back-to-top v-if="!isSmallScreen" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: "",
      theme: "default",
      themes: [
        { value: "default", text: "Default", iconColor: "#33bebc" },
        { value: "crazy", text: "Crazy", iconColor: "#33bebc" },
        { value: "dark", text: "Dark", iconColor: "#cc925c" },
      ],
      links: [
        { link: "#home", text: "home" },
        { link: "#about", text: "about" },
        { link: "#portfolio", text: "portfolio" },
        { link: "#social-networks", text: "contacts" },
        { link: "#repositories", text: "repositories" },
      ],
    };
  },
  computed: {
    isSmallScreen() {
      return this.width < 640;
    },
  },
  mounted() {
    this.setTheme(localStorage.getItem("theme") ?? "default");
    this.loadTheme();
    window.addEventListener("resize", this.setWidth);
    this.setWidth();
  },
  destroyed() {
    window.removeEventListener("resize", this.setWidth);
  },
  methods: {
    loadTheme() {
      if (this.theme === "default") {
        document.documentElement.removeAttribute("theme");
      } else {
        document.documentElement.setAttribute("theme", "crazy");
      }
    },
    setWidth() {
      this.width = window.innerWidth;
    },
    setTheme: (theme) => {
      if (this.theme === theme) {
        return;
      }
      this.theme = theme;

      if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
      }
      document.documentElement.setAttribute("theme", theme);
      // localStorage.setItem('theme', theme)
    },
  },
};
</script>
