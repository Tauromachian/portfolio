<template>
  <div class="flex-wrapp">
    <base-button
      v-for="(value, index) in values"
      :key="value + index"
      v-model="activeChips[index]"
      :text="value"
      class="chip bg-primary hover:bg-green-300 mr-1 mb-1"
      :is-activable="false"
    />
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'ButtonRiver',
  components: {
    BaseButton
  },
  props: {

    values: {
      type: [Array, Object],
      default: () => []
    }
  },
  data () {
    return {
      activeChips: []
    }
  }
}
</script>

<style lang="scss" scoped>
.chip {
  cursor: pointer;
  transition: all 0.2s;
}
</style>
