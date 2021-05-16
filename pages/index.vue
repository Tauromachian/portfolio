<template>
  <div class="container mx-auto">
    <base-section
      class="flex flex-col items-center justify-center"
      title="Portafolio"
    >
      <button-river :values="technologies" />
    </base-section>
    <base-section
      class="flex flex-col items-center justify-center"
      title="Repositorios"
    >
      <a
        v-for="(repository, index) in repositories"
        :key="repository.name + index"
        :href="repository.html_url"
        class="repo-link bg-green-400 mt-1 px-2 rounded hover:bg-green-300"
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

export default {
  name: 'Index',
  components: {
    ButtonRiver,
    BaseSection
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
