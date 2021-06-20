<template>
  <div class="flex bg-primary">
    <div class="flex px-3 text-2xl ml-auto mr-14">
      <base-button class="navbar__link" icon @click="changeLocal">
        <span class="mdi mdi-translate" />
      </base-button>
      <base-button class="navbar__link" icon @click="changeTheme">
        <span class="mdi mdi-invert-colors" />
      </base-button>
      <ul class="flex items-center text-xl ">
        <li v-for="link in links" :key="link.link + link.text" class="px-3 navbar__link">
          <a :href="link.link" @click.prevent="scrollToPosition(link.link)">
            {{ $t(link.text) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
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
      isHidden: false
    }
  },
  computed: {
    ...mapState(['theme', 'links'])
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
    },
    scrollToPosition (postitionId) {
      const elmnt = document.getElementById(postitionId.split('#').pop())
      elmnt.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
