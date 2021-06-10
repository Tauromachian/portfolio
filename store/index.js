export const state = () => ({
  theme: 'default',
  themes: ['default', 'crazy'],
  links: [
    { link: '#about', text: 'About' },
    { link: '#portfolio', text: 'Portfolio' },
    { link: '#social-networks', text: 'Repositories' },
    { link: '#repositories', text: 'Repositories' }
  ]
})

export const mutations = {
  setTheme: (state, theme) => {
    state.theme = theme
    localStorage.setItem('theme', theme)
  }
}
