<template>
  <div class="flex justify-center bg-primary px-3 text-2xl">
    <base-button icon @click="changeLocal">
      <span class="mdi mdi-translate" />
    </base-button>
    <base-button icon @click="changeTheme">
      <span class="mdi mdi-invert-colors" />
    </base-button>
    <base-button icon>
      <span class="mdi mdi-menu" />
    </base-button>
  </div>
</template>

<script>
// import AppLinks from './AppLinks'
import BaseButton from './BaseButton'

export default {
  name: 'BottomNav',
  components: {
    BaseButton
    // AppLinks
  },
  methods: {
    changeLocal () {
      this.$i18n.locale === 'en'
        ? this.$i18n.setLocale('es')
        : this.$i18n.setLocale('en')
    },
    changeTheme () {
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme')
      } else {
        document.documentElement.setAttribute('theme', 'dark')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
app-links li {
  display: inline;
}
</style>
