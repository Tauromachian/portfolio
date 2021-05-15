<template>
  <div class="container">
    <base-section class="flex-column" title="Portafolios">
      <button-river :values="technologies" />
    </base-section>
    <base-section class="flex-column" title="Repositorios">
      <p v-for="(repository, index) in repositories" :key="repository.name + index">
        {{ repository.name }}
      </p>
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
