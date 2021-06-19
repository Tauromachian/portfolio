<template>
  <list-wrapper>
    <list-item
      v-for="(theme, index) in themes"
      :key="theme.value + index"
      @click="setTheme(theme.value)"
    >
      {{ theme.text }}
    </list-item>
  </list-wrapper>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'default'
    },
    themes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedTheme: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    setTheme (themeValue) {
      this.selectedTheme = themeValue
      this.$emit('click', themeValue)
    }
  }
}
</script>

<style lang="scss" scoped></style>
