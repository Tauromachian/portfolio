<template>
  <div class="flex flex-col">
    <div
      class="links flex flex-col items-center justify-center text-center bg-primary"
      :class="{ 'links--active': isHidden }"
    >
      <ul>
        <li v-for="link in links" :key="link.link + link.text" class="navbar__link">
          <a :href="link.link">
            {{ $t(link.text) }}
          </a>
        </li>
      </ul>
    </div>
    <div class="buttons flex justify-center bg-primary px-3 text-2xl">
      <base-button class="navbar__link" icon @click="changeLocal">
        <span class="mdi mdi-translate" />
      </base-button>
      <base-menu>
        <template #activator="{ showDropdown }">
          <base-button class="navbar__link" icon @click="showDropdown">
            <span class="mdi mdi-invert-colors" />
          </base-button>
        </template>
        <theme-selector v-model="theme" :themes="themes" />
      </base-menu>
      <base-button class="navbar__link" icon @click="isHidden = !isHidden">
        <span class="mdi mdi-menu" />
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BaseButton from './BaseButton'

export default {
  name: 'BottomNav',
  components: {
    BaseButton
  },
  data () {
    return {
      isHidden: true,
      theme: 'default'
    }
  },
  computed: {
    ...mapState(['links', 'themes'])
  },
  watch: {
    theme (val) {
      this.changeTheme(val)
    }
  },
  methods: {
    ...mapMutations(['setTheme']),
    changeLocal () {
      this.$i18n.locale === 'en'
        ? this.$i18n.setLocale('es')
        : this.$i18n.setLocale('en')
    },
    changeTheme (theme) {
      this.setTheme(theme)
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme')
      }
      document.documentElement.setAttribute('theme', theme)
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
