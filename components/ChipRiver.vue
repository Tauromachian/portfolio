<template>
  <div class="flex flex-wrap">
    <base-chip
      v-for="(value, index) in values"
      :key="value + index"
      v-model="activeChips[index]"
      :text="value"
      class="mr-1 mb-1"
      :is-activable="false"
    />
  </div>
</template>

<script>
export default {
  name: 'ChipRiver',
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
