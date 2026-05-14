import { defineStore } from 'pinia'

export const useCommandStore = defineStore('command', {
  state: () => ({
    open: false,
  }),

  actions: {
    toggle() {
      this.open = !this.open
    },

    close() {
      this.open = false
    },

    openPalette() {
      this.open = true
    },
  },
})