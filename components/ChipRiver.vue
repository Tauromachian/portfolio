<template>
  <div class="flex flex-wrap justify-center">
    <base-chip
      v-for="(value, index) in values"
      :key="value + index"
      v-model="activeChips[index]"
      :text="value"
      class="chip bg-primary mr-1 mb-1"
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

<style lang="scss" scoped>
.chip {
  transition: all 0.2s;
}
.chip:hover {
  background-color: var(--color-secondary);
}
</style>
