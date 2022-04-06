<template>
  <section class="flex flex-col md:flex-row mb-32 p-3 relative">
    <div class="flex flex-col h-full justify-center hero__text">
      <h1 class="text-7xl md:text-8xl">
        Making ideas happen
      </h1>
      <p class="mt-10 text-xl">
        <strong>
          I am a a web developer/fullstacker
        </strong>
      </p>
      <p class=" text-xl">
        <strong>
          I will build your site and make it look awesome
        </strong>
      </p>
      <div>
        <a href="#portfolio">
          <base-button class="mt-12 relative" is-call-to-action>
            <div class="w-full h-full" />
            <span class="mdi mdi-eye absolute left-5" />
            <span class="mx-2" />
            Check skills
          </base-button>
        </a>
        <a href="#social-networks">
          <base-button class="mt-12 relative" is-call-to-action outline>
            <div class="w-full h-full" />
            <span class="mdi mdi-email absolute left-5" />
            <span class="mx-2" />
            Contact me
          </base-button>
        </a>
      </div>
    </div>
    <div class="flex flex-col h-full justify-center hero__code">
      <pre class="line-numbers code-handler-styles" data-src="/markup.html" />
    </div>
    <span class="mdi mdi-arrow-down scroll-icon" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  name: 'SectionHero',
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

.code-handler-styles {
  border-radius: 10px;
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
  font-size: 4rem;
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
