<template>
  <div class="w-full bg-primary text-left py-4 lg:px-4 rounded flex items-center" role="alert">
    <span class="mr-3">
      <img src="" alt="">
    </span>
    <span class="mdi text-3xl mr-3" :class="{ 'mdi-check': type === 'success', 'mdi-alert': type === 'error' }" />

    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppAlert',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      default: 'Success!'
    }
  }
}
</script>

<style>

</style>
