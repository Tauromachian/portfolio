<template>
  <div class="container">
    <div class="flex-column">
      <h1>Portafolios</h1>
      <ChipRiver :values="technologies" />
    </div>
    <div class="flex justify-center">
      <h1>Repositorios</h1>
      <p v-for="(repository, index) in repositories" :key="respository + index">
        {{ repository }}
      </p>
    </div>
  </div>
</template>

<script>
import ChipRiver from '~/components/ChipRiver'

export default {
  name: 'Index',
  components: {
    ChipRiver
  },
  data () {
    return {
      technologies: [
        'Javascript'
      ],
      repositories: []
    }
  }
}
</script>
