<template>
  <header>
    <base-gradient v-if="isSmallScreen" degrees="180deg" :height="6" />
    <top-nav
      v-if="!isSmallScreen"
      :links="links"
      :themes="themes"
      class="top-0 left-0 right-0"
      :theme="theme"
      @change:theme="setTheme"
    />
  </header>
  <main class="container mx-auto">
    <section-hero id="home" />

    <section-about id="about" />

    <section-skills id="skills" />

    <section-projects id="projects"></section-projects>

    <section-additional-work id="additional-work"></section-additional-work>

    <section-contacts id="social-networks" />

    <bottom-nav
      v-if="isSmallScreen"
      :links="links"
      :themes="themes"
      class="fixed bottom-0 left-0 right-0 z-50"
      :theme="theme"
      @change:theme="setTheme"
    />
    <div class="mt-20 pt-10 sm:mt-0 content" />
    <vue-back-to-top v-if="!isSmallScreen" />
  </main>
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
        { link: "#skills", text: "skills" },
        { link: "#projects", text: "projects.title" },
        { link: "#additional-work", text: "additionalWork.title" },
        { link: "#social-networks", text: "contacts" },
      ],
    };
  },
  computed: {
    isSmallScreen() {
      return this.width < 835;
    },
  },
  mounted() {
    this.setTheme(localStorage.getItem("theme") ?? "default");
    window.addEventListener("resize", this.setWidth);
    this.setWidth();
  },
  unmounted() {
    window.removeEventListener("resize", this.setWidth);
  },
  methods: {
    setWidth() {
      this.width = window.innerWidth;
    },
    setTheme(theme) {
      if (this.theme === theme) {
        return;
      }
      this.theme = theme;

      document.documentElement.setAttribute("theme", theme);
      localStorage.setItem("theme", theme);
    },
  },
};
</script>
