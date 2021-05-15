<template>
  <div class="container">
    <div class="flex-column">
      <h1 class="mb-3 text-2xl md:text-4xl">
        Portafolios
      </h1>
      <ButtonRiver :values="technologies" />
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
import ButtonRiver from '~/components/ButtonRiver'

export default {
  name: 'Index',
  components: {
    ButtonRiver
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
