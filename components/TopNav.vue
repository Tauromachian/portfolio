<template>
  <nav class="flex bg-primary">
    <div class="container flex justify-center text-2xl ml-14 z-50">
      <div class="flex items-center">
        <h4 class="text-3xl">
          José García
        </h4>
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
      <div>
        <base-button class="navbar__link" icon @click="changeLocal">
          <span class="mdi mdi-translate" />
        </base-button>
        <base-menu bottom="initial" top="3rem">
          <template #activator="{ on }">
            <base-button class="navbar__link" icon v-on="on">
              <span class="mdi mdi-invert-colors" />
            </base-button>
          </template>
          <theme-selector v-model="theme" :themes="themes" />
        </base-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BaseButton from './BaseButton'

export default {
  name: 'TopNav',
  components: {
    BaseButton
  },
  data () {
    return {
      isHidden: false,
      theme: 'default'
    }
  },
  computed: {
    ...mapState(['links', 'themes'])
  },
  watch: {
    theme (val) {
      this.setTheme(val)
    }
  },
  methods: {
    ...mapMutations(['setTheme']),
    changeLocal () {
      this.$i18n.locale === 'en'
        ? this.$i18n.setLocale('es')
        : this.$i18n.setLocale('en')
    },
    scrollToPosition (postitionId) {
      const elmnt = document.getElementById(postitionId.split('#').pop())
      elmnt.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
