<template>
  <header
    class="sticky top-0 z-30 border-b px-4 py-4 backdrop-blur-xl sm:px-6"
    :style="{
      background: 'rgba(7,11,20,0.72)',
      borderColor: 'var(--border-color)',
    }"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex min-w-0 items-center gap-3">
        <button
          class="rounded-2xl border p-2 lg:hidden"
          :style="{
            borderColor: 'var(--border-color)',
          }"
          @click="toggleSidebar"
        >
          <Menu class="h-5 w-5" />
        </button>

        <div class="min-w-0">
          <h2
            class="truncate text-xl font-black sm:text-2xl"
            :style="{ color: 'var(--text-primary)' }"
          >
            Dashboard
          </h2>

          <p
            class="hidden text-sm sm:block"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Welcome back to PulseIQ
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 sm:gap-4">
        <button
          class="hidden rounded-2xl border p-3 transition hover:bg-white/5 sm:flex"
          :style="{
            borderColor: 'var(--border-color)',
          }"
        >
          <Search class="h-5 w-5" />
        </button>

        <button
          class="rounded-2xl border p-3 transition hover:bg-white/5"
          :style="{
            borderColor: 'var(--border-color)',
          }"
          @click="toggleTheme"
        >
          <Sun
            v-if="theme === 'dark'"
            class="h-5 w-5"
          />

          <Moon
            v-else
            class="h-5 w-5"
          />
        </button>

        <button
          class="relative rounded-2xl border p-3 transition hover:bg-white/5"
          :style="{
            borderColor: 'var(--border-color)',
          }"
        >
          <Bell class="h-5 w-5" />

          <div
            class="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"
          />
        </button>

        <div
          class="hidden h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 font-bold text-black sm:flex"
        >
          M
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
} from 'lucide-vue-next'

import { useThemeStore } from '@/stores/themeStore'

import { useUiStore } from '@/stores/uiStore'

const themeStore = useThemeStore()

const uiStore = useUiStore()

const { theme } = storeToRefs(themeStore)

const { toggleTheme } = themeStore

const { toggleSidebar } = uiStore
</script>