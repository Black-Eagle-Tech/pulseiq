import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

export function useTheme() {
  const themeStore = useThemeStore()

  const isDark = computed(() => themeStore.darkMode)

  return {
    isDark,
    toggleTheme: themeStore.toggleTheme,
  }
}
