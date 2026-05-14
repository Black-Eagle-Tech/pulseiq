import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: true,
    onboardingOpen: true,
  }),

  actions: {
    finishLoading() {
      this.loading = false
    },

    closeOnboarding() {
      this.onboardingOpen = false
    },
  },
})