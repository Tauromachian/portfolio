<template>
  <div class="flex flex-col bg-primary">
    <div class="buttons flex px-3 text-2xl ml-auto mr-10">
      <base-button icon @click="changeLocal">
        <span class="mdi mdi-translate" />
      </base-button>
      <base-button icon @click="changeTheme">
        <span class="mdi mdi-invert-colors" />
      </base-button>
      <ul class="flex items-center text-xl">
        <li class="mx-2">
          <a href="#about">About</a>
        </li>
        <li class="mx-2">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li class="mx-2">
          <a href="#social-networks">Social Networks</a>
        </li>
        <li class="mx-2">
          <a href="#repositories">Repositories</a>
        </li>
      </ul>
    </div>
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
  data () {
    return {
      isHidden: false
    }
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
