<template>
  <section class="flex flex-col md:flex-row mb-32 p-3 relative">
    <div class="flex flex-col h-full justify-center hero__text">
      <h1 class="text-7xl md:text-8xl">
        Making ideas happen
      </h1>
      <p class="mt-5 text-xl">
        <strong>
          Am a software engineer, a web developer fullstacker.
        </strong>
      </p>
      <p class=" text-xl">
        <strong>
          I can build your site and make it look good
        </strong>
      </p>
      <div>
        <base-button class="mt-5">
          I want to check your skills
        </base-button>
      </div>
    </div>
    <div class="flex flex-col h-full justify-center hero__code">
      <pre class="line-numbers"><code class="language-html" v-text="content" /></pre>
    </div>
    <span class="mdi mdi-arrow-down scroll-icon" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  name: 'SectionHero',
  computed: {
    content () {
      return '<section>\n\t<h1>Making ideas happen</h1>\n\t<p class="margin-top-5">\n\t\t<strong>Web developer/ Fullstacker</strong>\n\t</p>\n\t<button>I want to check your skills</button>\n</section>'
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
}

.hero__text {
  flex-basis: 50%;
}

.hero__code {
  flex-basis: 50%;
}

.hero-content-last-name {
  margin-top: -0.25em;
}

.scroll-icon {
  animation: up-and-down 1s infinite ease-out;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
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
