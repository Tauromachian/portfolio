<template>
  <section class="flex flex-col md:flex-row mb-32 p-3 relative">
    <div class="flex flex-col h-full justify-center">
      <h1 class="text-7xl md:text-8xl">
        Making ideas happen
      </h1>
      <p>Web developer/ Fullstacker</p>
      <base-button>I want to check your skills</base-button>
    </div>
    <div class="flex flex-col h-full justify-center">
      <pre>
        <pre><code class="language-html" v-text="content" /></pre>
      </pre>
    </div>
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  name: 'SectionHero',
  computed: {
    content () {
      return '<div>\n\t<h1>Making ideas happen</h1>\n\t<p>Web developer/ Fullstacker</p>\n\t<button>I want to check your skills</button>\n</div>'
    }
  },
  mounted () {
    Prism.highlightAll()
  }

}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  section {
    height: calc(100vh - 64px);
  }
  .basis-2\/5 {
    flex-basis: 40%;
  }
}

.hero--img-container {
  flex-basis: 50%;
}

.hero--information-container {
  flex-basis: 50%;
}

.hero-content-last-name {
  margin-top: -0.25em;
}

.scroll-icon {
  animation: up-and-down 1s infinite ease-out;
}

@keyframes up-and-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
