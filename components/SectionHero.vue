<template>
  <section class="flex flex-col lg:flex-row mb-32 p-3 relative">
    <div class="flex flex-col h-full justify-center hero__text md:mr-5 lg:mr-0">
      <h1 class="text-6xl xl:text-7xl 2xl:text-8xl">
        {{ $t('hero.title') }}
      </h1>
      <p class="mt-10 text-xl">
        <strong>
          {{ $t('hero.description1') }}
        </strong>
      </p>
      <p class=" text-xl">
        <strong>
          {{ $t('hero.description2') }}
        </strong>
      </p>
      <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
        <a href="#portfolio">
          <base-button class="mt-12 relative w-full md:w-unset" is-call-to-action>
            <div class="w-full h-full" />
            <span class="mdi mdi-eye absolute left-5" />
            <span class="mx-2" />
            {{ $t('hero.button1') }}
          </base-button>
        </a>
        <a href="#social-networks">
          <base-button class="mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2 relative w-full md:w-unset" is-call-to-action outline>
            <div class="w-full h-full" />
            <span class="mdi mdi-email absolute left-5" />
            <span class="mx-2" />
            {{ $t('hero.button2') }}
          </base-button>
        </a>
      </div>
    </div>
    <div class="flex flex-col h-full justify-center hero__code md:max-w-lg lg:max-w-max">
      <pre class="line-numbers code-handler-styles" data-src="/markup.html" />
    </div>
    <span class="mdi mdi-arrow-down scroll-icon invisible xl:visible" />
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
@media screen and (min-width: 1024px) {
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
