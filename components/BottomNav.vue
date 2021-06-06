<template>
  <div class="flex flex-col">
    <div
      class="links flex flex-col items-center justify-center text-center bg-primary"
      :class="{ 'links--active': isHidden }"
    >
      <ul>
        <li class="navbar__link">
          <a href="#about">About</a>
        </li>
        <li class="navbar__link">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li class="navbar__link">
          <a href="#social-networks">Social Networks</a>
        </li>
        <li class="navbar__link">
          <a href="#repositories">Repositories</a>
        </li>
      </ul>
    </div>
    <div class="buttons flex justify-center bg-primary px-3 text-2xl">
      <base-button class="navbar__link" icon @click="changeLocal">
        <span class="mdi mdi-translate" />
      </base-button>
      <base-button class="navbar__link" icon @click="changeTheme">
        <span class="mdi mdi-invert-colors" />
      </base-button>
      <base-button class="navbar__link" icon @click="isHidden = !isHidden">
        <span class="mdi mdi-menu" />
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BaseButton from './BaseButton'

export default {
  name: 'BottomNav',
  components: {
    BaseButton
  },
  data () {
    return {
      isHidden: true
    }
  },
  methods: {
    ...mapMutations(['setTheme']),
    changeLocal () {
      this.$i18n.locale === 'en'
        ? this.$i18n.setLocale('es')
        : this.$i18n.setLocale('en')
    },
    changeTheme () {
      if (document.documentElement.hasAttribute('theme')) {
        this.setTheme('default')
        document.documentElement.removeAttribute('theme')
      } else {
        this.setTheme('crazy')
        document.documentElement.setAttribute('theme', 'crazy')
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
  transition: all 0.3s linear;
  z-index: 10;
}

.links--active {
  transform: translate(0, 100px);
}
</style>
