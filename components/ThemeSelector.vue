<template>
  <list-wrapper>
    <list-item
      v-for="(theme, index) in activeThemes"
      :key="theme.value + index"
      :active="theme.active"
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
    activeThemes () {
      return this.themes.map((theme) => {
        theme.active = (theme.value === this.selectedTheme)
        return theme
      })
    },
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
