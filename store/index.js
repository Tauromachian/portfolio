export const state = () => ({
  theme: 'default',
  themes: [
    { value: 'default', text: 'Default', iconColor: '#33bebc' },
    { value: 'crazy', text: 'Crazy', iconColor: '#33bebc' },
    { value: 'dark', text: 'Dark', iconColor: '#cc925c' }
  ],
  links: [
    { link: '#home', text: 'home' },
    { link: '#about', text: 'about' },
    { link: '#portfolio', text: 'portfolio' },
    { link: '#social-networks', text: 'contacts' },
    { link: '#repositories', text: 'repositories' }
  ]
})

export const mutations = {
  setTheme: (state, theme) => {
    if (state.theme === theme) {
      return
    }
    state.theme = theme

    if (document.documentElement.hasAttribute('theme')) {
      document.documentElement.removeAttribute('theme')
    }
    document.documentElement.setAttribute('theme', theme)
    // localStorage.setItem('theme', theme)
  }
}
