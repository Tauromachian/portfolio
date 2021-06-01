<template>
  <div class="container mx-auto">
    <!-- About -->
    <base-section
      id="about"
      class="flex flex-col items-center justify-center"
      :title="$t('about')"
    >
      <p class="md:mr-20 md:ml-20">
        {{ $t('aboutText') }}
      </p>
      <div class="flex flex-col md:flex-row">
        <feature-card
          :title="$t('intuitive')"
          icon="mdi-lightbulb-on-outline"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t('intuitiveText') }}
          </p>
        </feature-card>
        <feature-card
          :title="$t('fast')"
          icon="mdi-rocket-launch"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t('fastText') }}
          </p>
        </feature-card>
        <feature-card
          :title="$t('responsive')"
          icon="mdi-responsive"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t('responsiveText') }}
          </p>
        </feature-card>
        <feature-card
          :title="$t('reactive')"
          icon="mdi-alpha-r-circle"
          class="mt-7"
        >
          <p class="md:text-center md:mx-3">
            {{ $t('reactiveText') }}
          </p>
        </feature-card>
      </div>
    </base-section>

    <!-- Portfolio -->
    <base-section
      id="portfolio"
      class="flex flex-col items-center justify-center"
      :title="$t('portfolio')"
    >
      <button-river :values="technologies" />
    </base-section>

    <!-- Social networks -->
    <base-section
      id="social-networks"
      class="flex flex-col items-center justify-center"
      :title="$t('socialNetworks')"
    >
      <div class="flex text-7xl md:text-8xl">
        <a class="social-link" href="https://www.linkedin.com/in/jose-garcia-888941180/">
          <span class="mdi mdi-linkedin color-primary" />
        </a>
        <a class="social-link" href="https://github.com/Tauromachian">
          <span class="mdi mdi-github color-primary " />
        </a>
        <a class="social-link" href="https://stackoverflow.com/users/10824037/jogarcia">
          <span class="mdi mdi-stack-overflow color-primary" />
        </a>
      </div>
    </base-section>

    <!-- Repositories -->
    <base-section
      id="repositories"
      class="flex flex-col items-center justify-center"
      :title="$t('repositories')"
    >
      <a
        v-for="(repository, index) in repositories"
        :key="repository.name + index"
        :href="repository.html_url"
        class="repo-link bg-primary mt-1 px-2 rounded hover:bg-green-300"
      >
        {{ repository.name }}
      </a>
    </base-section>
  </div>
</template>

<script>
import axios from 'axios'
import ButtonRiver from '~/components/ButtonRiver'
import BaseSection from '~/components/BaseSection'
import FeatureCard from '~/components/FeatureCard'

export default {
  name: 'Index',
  components: {
    ButtonRiver,
    BaseSection,
    FeatureCard
  },
  data () {
    return {
      technologies: [
        'Javascript',
        'Vue.js',
        'Laravel',
        'Express.js',
        'Bootstrap',
        'CSS',
        'SCSS'
      ],
      repositories: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      const token = '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'
      const { data } = await axios.get(
        'https://api.github.com/users/tauromachian/repos',
        {
          headers: {
            authorization: `token ${token}`
          }
        }
      )
      this.repositories = data
    }
  }
}
</script>

<style lang="scss">
.repo-link {
  transition: all 0.2s;
}
</style>
