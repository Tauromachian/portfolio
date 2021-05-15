<template>
  <div>
    <div class="flex justify-center">
      <h1>Repositorios</h1>
      <p v-for="(repository, index) in repositories" :key="respository + index">
        {{ repository }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      repositories: []
    }
  }
}
</script>
