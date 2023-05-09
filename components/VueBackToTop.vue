<template>
  <button
    title="Go to top"
    class="rounded-lg fixed z-50 outline-none border-2 bg-transparent transition-all transition-500 text-2xl floating-button"
    :class="isShowingClasses"
    @click="topFunction"
  >
    <SocialIconsBase class="ml-2" icon="arrow-up" width="28px" height="30px" />
  </button>
</template>

<script>
export default {
  name: "VueBackToTop",
  data() {
    return {
      colorIcons: "",
      floatingButton: null,
      isShowing: false,
    };
  },
  computed: {
    isShowingClasses() {
      if (this.isShowing) {
        return {
          "floating-button--show": true,
        };
      }
      return {};
    },
  },

  mounted() {
    this.floatingButton = document.getElementById("floating-button");
    window.onscroll = () => {
      this.scrollFunction(this.floatingButton);
    };
  },
  methods: {
    scrollFunction() {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (this.isShowing = true)
        : (this.isShowing = false);
    },
    topFunction() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.floating-button {
  display: none; /* Hidden by default */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  border-color: var(--color-primary);
  color: var(--color-primary);
  width: 2em;
  height: 2em;
}

.floating-button--show {
  display: block;
  animation: roll 1s;
}

.floating-button > img {
  left: 7px;
  top: 6px;
  z-index: 100;
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
