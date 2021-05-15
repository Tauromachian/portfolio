<template>
  <div class="container">
    <div class="flex-column">
      <h1 class="mb-3 text-2xl md:text-4xl">
        Portafolios
      </h1>
      <ButtonRiver :values="technologies" />
    </div>
    <div class="flex-column justify-center ">
      <h1 class="mb-3 text-2xl md:text-4xl">
        Repositorios
      </h1>
      <p v-for="(repository, index) in repositories" :key="repository.name + index">
        {{ repository.name }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ButtonRiver from '~/components/ButtonRiver'

export default {
  name: 'Index',
  components: {
    ButtonRiver
  },
  data () {
    return {
      technologies: ['Javascript'],
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
        'https://api.github.com/users/tauromachian/repos', {
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
