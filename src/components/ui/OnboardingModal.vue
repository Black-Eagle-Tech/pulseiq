<template>
  <Transition name="fade">
    <div
      v-if="onboardingOpen"
      class="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div
        class="w-full max-w-2xl overflow-hidden rounded-[32px] border"
        :style="{
          background: 'rgba(15,23,42,0.96)',
          borderColor: 'var(--border-color)',
        }"
      >
        <div class="relative p-10">
          <div
            class="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div class="relative">
            <div
              class="mb-8 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-400 to-cyan-300"
            >
              <span class="text-4xl font-black text-black">
                P
              </span>
            </div>

            <h1
              class="text-5xl font-black tracking-tight"
            >
              Welcome to PulseIQ
            </h1>

            <p
              class="mt-5 max-w-xl text-lg leading-relaxed"
              :style="{ color: 'var(--text-secondary)' }"
            >
              Experience a next-generation AI analytics
              dashboard designed to simulate modern SaaS
              platforms with realtime insights,
              intelligent recommendations, and premium UX.
            </p>

            <div class="mt-10 grid gap-4 md:grid-cols-3">
              <div
                class="rounded-3xl border p-5"
                :style="{
                  borderColor: 'var(--border-color)',
                  background: 'rgba(255,255,255,0.03)',
                }"
              >
                <p class="text-lg font-bold">
                  AI Insights
                </p>

                <p
                  class="mt-2 text-sm"
                  :style="{ color: 'var(--text-secondary)' }"
                >
                  Simulated intelligent recommendations
                </p>
              </div>

              <div
                class="rounded-3xl border p-5"
                :style="{
                  borderColor: 'var(--border-color)',
                  background: 'rgba(255,255,255,0.03)',
                }"
              >
                <p class="text-lg font-bold">
                  Live Analytics
                </p>

                <p
                  class="mt-2 text-sm"
                  :style="{ color: 'var(--text-secondary)' }"
                >
                  Realtime dashboard experience
                </p>
              </div>

              <div
                class="rounded-3xl border p-5"
                :style="{
                  borderColor: 'var(--border-color)',
                  background: 'rgba(255,255,255,0.03)',
                }"
              >
                <p class="text-lg font-bold">
                  Modern UX
                </p>

                <p
                  class="mt-2 text-sm"
                  :style="{ color: 'var(--text-secondary)' }"
                >
                  Inspired by Linear & Vercel
                </p>
              </div>
            </div>

            <button
              class="mt-10 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-300 px-8 py-4 text-lg font-bold text-black transition hover:scale-[1.02]"
              @click="closeOnboarding"
            >
              Enter Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const { onboardingOpen } = storeToRefs(appStore)

const { closeOnboarding } = appStore
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>