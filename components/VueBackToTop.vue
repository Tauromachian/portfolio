<template>
  <button title="Go to top" class="rounded-lg lol floating-button" :class="isShowingClasses" @click="topFunction">
    <svg-icon type="mdi" :path="mdiArrowUp" />
  </button>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowUp } from '@mdi/js'

export default {
  name: 'VueBackToTop',
  components: {
    SvgIcon
  },
  data () {
    return {
      floatingButton: null,
      isShowing: false,
      mdiArrowUp
    }
  },
  computed: {
    isShowingClasses () {
      if (this.isShowing) {
        return {
          'floating-button--show': true
        }
      }
      return {}
    }
  },
  mounted () {
    this.floatingButton = document.getElementById('floating-button')
    window.onscroll = () => {
      this.scrollFunction(this.floatingButton)
    }
  },
  methods: {
    scrollFunction () {
      (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20)
        ? this.isShowing = true
        : this.isShowing = false
    },
    topFunction () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.floating-button {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  outline: none; /* Remove outline */
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
  border-width: 2px;
  width: 2em;
  height: 2em;
  font-size: 1.5rem; /* Increase font size */
  transition: all 0.5s;
}

.floating-button--show {
  display: block;
  animation: roll 1s;
}

@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
