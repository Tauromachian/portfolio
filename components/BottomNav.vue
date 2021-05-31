<template>
  <div class="flex flex-col">
    <div
      class="links flex flex-col items-center justify-center text-center bg-primary"
      :class="{ 'links--active': isHidden }"
    >
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#social-networks">Social Networks</a>
        </li>
        <li>
          <a href="#repositories">Repositories</a>
        </li>
      </ul>
    </div>
    <div class="buttons flex justify-center bg-primary px-3 text-2xl">
      <base-button icon @click="changeLocal">
        <span class="mdi mdi-translate" />
      </base-button>
      <base-button icon @click="changeTheme">
        <span class="mdi mdi-invert-colors" />
      </base-button>
      <base-button icon @click="isHidden = !isHidden">
        <span class="mdi mdi-menu" />
      </base-button>
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

<style lang="scss" scoped>
app-links li {
  display: inline;
}

.buttons {
  z-index: 20;
}

.links {
  transition: all 0.4s linear;
  z-index: 10;
}

.links--active {
  transform: translate(0, 100px);
}
</style>
