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
        <svg-icon type="mdi" :path="icons.mdiTranslate" />
      </base-button>
      <base-menu bottom="3rem">
        <template #activator="{ on }">
          <base-button class="navbar__link" icon v-on="on">
            <svg-icon type="mdi" :path="icons.mdiInvertColors" />
          </base-button>
        </template>
        <theme-selector v-model="theme" :themes="themes" />
      </base-menu>
      <base-button class="navbar__link" icon @click="isHidden = !isHidden">
        <svg-icon type="mdi" :path="icons.mdiMenu" />
      </base-button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTranslate, mdiInvertColors, mdiMenu } from '@mdi/js'
import BaseButton from './BaseButton'

export default {
  name: 'BottomNav',
  components: {
    BaseButton,
    SvgIcon
  },
  data () {
    return {
      isHidden: true,
      theme: 'default',
      icons: { mdiTranslate, mdiInvertColors, mdiMenu }
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
