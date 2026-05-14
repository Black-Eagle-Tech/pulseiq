import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true,
  }),

  actions: {
    initializeTheme() {
      const savedTheme = localStorage.getItem('pulseiq-theme')

      if (savedTheme) {
        this.darkMode = savedTheme === 'dark'
      }

      this.applyTheme()
    },

    toggleTheme() {
      this.darkMode = !this.darkMode

      localStorage.setItem(
        'pulseiq-theme',
        this.darkMode ? 'dark' : 'light'
      )

      this.applyTheme()
    },

    applyTheme() {
      document.documentElement.classList.toggle(
        'light',
        !this.darkMode
      )
    },
  },
})