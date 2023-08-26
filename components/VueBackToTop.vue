<template>
  <button
    title="Go to top"
    class="hidden rounded-lg w-12 h-12 fixed z-50 outline-none border-2 bg-transparent transition-all transition-500 text-2xl bottom-7 right-7 shake-horizontal floating-button"
    :class="isShowingClasses"
    @click="topFunction"
  >
    <SocialIconsBase
      class="ml-2 z-70"
      icon="arrow-up"
      width="28px"
      height="30px"
    />
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
  border-color: var(--color-primary);
  color: var(--color-primary);
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
