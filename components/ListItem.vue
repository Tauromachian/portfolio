<template>
  <div class="list-item self-center align-left" @click="click">
    <slot class="text-base" />
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
}
</style>
