<template>
  <div class="container">
    <div class="flex-column">
      <h1 class="mb-3 text-2xl md:text-4xl">
        Portafolios
      </h1>
      <ChipRiver :values="technologies" />
    </div>
    <div class="flex justify-center ">
      <h1 class="mb-3 text-2xl md:text-4xl">
        Repositorios
      </h1>
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
