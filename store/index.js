export const state = () => ({
  theme: 'default',
  themes: ['default', 'crazy'],
  links: [
    { link: '#about', text: 'about' },
    { link: '#portfolio', text: 'portfolio' },
    { link: '#social-networks', text: 'contacts' },
    { link: '#repositories', text: 'repositories' }
  ]
})

export const mutations = {
  setTheme: (state, theme) => {
    state.theme = theme
    localStorage.setItem('theme', theme)
  }
}
