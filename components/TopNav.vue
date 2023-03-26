<template>
  <nav class="flex bg-primary">
    <div class="container flex justify-center text-2xl ml-14 z-50 px-3">
      <div class="flex items-center">
        <img class="w-16 h-full" src="/website-logo-min.png" />
        <h4 class="text-3xl ml-5">José García</h4>
      </div>

      <ul class="flex items-center text-xl mx-auto">
        <li
          v-for="link in links"
          :key="link.link + link.text"
          class="px-3 navbar__link"
        >
          <a :href="link.link" @click.prevent="scrollToPosition(link.link)">
            {{ $t(link.text) }}
          </a>
        </li>
      </ul>
      <div class="flex items-center">
        <base-button
          title="Translate"
          class="navbar__link"
          icon
          @click="changeLocale($i18n)"
        >
          <SocialIconsBase icon="mdiTranslate" />
        </base-button>
        <base-menu bottom="initial" top="3rem">
          <template #activator="{ on }">
            <base-button
              title="Theme changer"
              class="navbar__link"
              icon
              v-on="on"
            >
              <SocialIconsBase icon="mdiInvertColors" />
            </base-button>
          </template>
          <theme-selector :themes="themes" :value="theme" @input="setTheme" />
        </base-menu>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  themes: {
    type: Array,
    default: () => [],
  },
  theme: {
    type: String,
    default: "default",
  },
});

const emit = defineEmits(["change:theme"]);

const setTheme = (val) => {
  emit("change:theme", val);
};
</script>

<style scoped>
.navbar__link {
  color: var(--text-color-primary);
  transition: all 0.2s;
  position: relative;
  margin-left: 0;
  margin-right: 0;
}

.navbar__link > img {
  position: absolute;
  top: 15px;
  left: 14.5px;
}

.navbar__link:hover {
  color: var(--text-color-secondary);
}
</style>
