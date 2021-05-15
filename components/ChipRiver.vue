<template>
  <div class="flex-wrapp">
    <Chip v-for="(value, index) in values" :key="technology + index" :text="value" />
  </div>
</template>

<script>
import Chip from '~/components/Chip'

export default {
  name: 'ChipRiver',
  components: {
    Chip
  },
  props: {
    values: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
