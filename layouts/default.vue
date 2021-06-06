<template>
  <div>
    <top-nav class="invisible sm:visible top-0 left-0 right-0" />
    <Nuxt />
    <bottom-nav class="sm:invisible fixed bottom-0 left-0 right-0" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted () {
    this.setTheme(localStorage.getItem('theme') ?? 'default')
    this.loadTheme()
  },
  methods: {
    ...mapMutations(['setTheme']),
    loadTheme () {
      if (this.theme === 'default') {
        document.documentElement.removeAttribute('theme')
      } else {
        document.documentElement.setAttribute('theme', 'crazy')
      }
    }
  }
}
</script>
