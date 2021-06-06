<template>
  <div>
    <top-nav v-if="!isSmallScreen" class="invisible sm:visible top-0 left-0 right-0" />
    <Nuxt />
    <bottom-nav class="sm:invisible fixed bottom-0 left-0 right-0" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      width: ''
    }
  },
  computed: {
    ...mapState(['theme']),
    isSmallScreen () {
      return this.width < 640
    }
  },
  mounted () {
    this.setTheme(localStorage.getItem('theme') ?? 'default')
    this.loadTheme()
    window.addEventListener('resize', this.setWidth)
    this.setWidth()
  },
  destroyed () {
    window.removeEventListener('resize', this.setWidth)
  },
  methods: {
    ...mapMutations(['setTheme']),
    loadTheme () {
      if (this.theme === 'default') {
        document.documentElement.removeAttribute('theme')
      } else {
        document.documentElement.setAttribute('theme', 'crazy')
      }
    },
    setWidth () {
      this.width = window.innerWidth
    }
  }
}
</script>
