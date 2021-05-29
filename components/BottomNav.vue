<template>
  <div class="flex justify-center bg-primary px-3">
    <base-button icon>
      <span class="mdi mdi-translate text-xl" />
    </base-button>
    <base-button icon>
      <span class="mdi mdi-invert-colors text-xl" />
    </base-button>
    <base-button icon>
      <span class="mdi mdi-menu text-xl" />
    </base-button>
  </div>
</template>

<script>
// import AppLinks from './AppLinks'
import BaseButton from './BaseButton'

export default {
  name: 'BottomNav',
  components: {
    BaseButton
    // AppLinks
  }
}
</script>

<style lang="scss" scoped>
app-links li {
  display: inline;
}
</style>
