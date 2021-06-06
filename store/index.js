export const state = () => ({
  theme: 'default',
  themes: ['default', 'crazy']
})

export const mutations = {
  setTheme: (state, theme) => {
    state.theme = theme
    localStorage.setItem('theme', theme)
  }
}
