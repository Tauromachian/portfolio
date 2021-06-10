<template>
  <button title="Go to top" class="rounded-lg floating-button" @click="topFunction">
    <span class="mdi mdi-arrow-up" />
  </button>
</template>

<script>
export default {
  name: 'VueBackToTop',
  data () {
    return {
      floatingButton: null
    }
  },
  mounted () {
    this.floatingButton = document.getElementById('floating-button')
    window.onscroll = () => {
      this.scrollFunction(this.floatingButton)
    }
  },
  methods: {
    scrollFunction (mybutton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = 'block'
      } else {
        mybutton.style.display = 'none'
      }
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
  width: 60px;
  height: 60px;
  font-size: 2em; /* Increase font size */
  transition: all 0.5s;
}
</style>
