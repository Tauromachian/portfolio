<template>
  <div class="container mx-auto">
    <base-section
      class="flex flex-col items-center justify-center"
      title="Quien soy"
    >
      <div class="flex flex-col">
        <p class="md:mr-20 md:ml-20">
          Soy un desarrollador web de fullstack. Disfruto crear sitios web
          responsivos usando tecnologías de desarrollo actuales.
        </p>
        <feature-card
          title="Intuitivo"
          icon="mdi-lightbulb-on-outline"
          class="mt-7"
        >
          <p>Sitios web enfocados an la experiencia de usuario.</p>
        </feature-card>
        <feature-card
          title="Rápido"
          icon="mdi-rocket-launch"
          class="mt-7"
        >
          <p>La eficiancia del sitio es una prioridad.</p>
        </feature-card>
        <feature-card
          title="Responsivo"
          icon="mdi-responsive"
          class="mt-7"
        >
          <p>Sitios web que funcionan y se ven bien en diferentes pantallas.</p>
        </feature-card>
        <feature-card
          title="Reactivos"
          icon="mdi-alpha-r-circle"
          class="mt-7"
        >
          <p>Reacciones instantáneas a las interacciones del usuario.</p>
        </feature-card>
      </div>
    </base-section>
    <base-section
      class="flex flex-col items-center justify-center"
      title="Portafolio"
    >
      <button-river :values="technologies" />
    </base-section>
    <base-section
      class="flex flex-col items-center justify-center"
      title="Redes sociales"
    >
      <div class="flex">
        <a href="https://www.linkedin.com/in/jose-garcia-888941180/">
          <span class="mdi mdi-linkedin color-primary text-8xl" />
        </a>
        <a href="https://github.com/Tauromachian">
          <span class="mdi mdi-github color-primary text-8xl" />
        </a>
        <a href="https://stackoverflow.com/users/10824037/jogarcia">
          <span class="mdi mdi-stack-overflow color-primary text-8xl" />
        </a>
      </div>
    </base-section>
    <base-section
      class="flex flex-col items-center justify-center"
      title="Repositorios"
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
        'Bootstrap'
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
