<template>
  <Transition name="slide">
    <div
      v-if="open"
      class="fixed inset-y-0 right-0 z-[120] w-full max-w-md overflow-y-auto border-l p-5 shadow-2xl sm:p-6"
      :style="{
        background: 'rgba(15,23,42,0.96)',
        borderColor: 'var(--border-color)',
      }"
    >
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-black">
            Dashboard Settings
          </h2>

          <p
            class="mt-2 text-sm"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Customize visible widgets
          </p>
        </div>

        <button
          class="rounded-2xl border px-4 py-2"
          :style="{
            borderColor: 'var(--border-color)',
          }"
          @click="open = false"
        >
          Close
        </button>
      </div>

      <div class="mt-10 space-y-5">
        <div
          v-for="(value, key) in widgets"
          :key="key"
          class="flex items-center justify-between rounded-2xl border p-5"
          :style="{
            borderColor: 'var(--border-color)',
            background: 'rgba(255,255,255,0.03)',
          }"
        >
          <div>
            <p class="font-semibold capitalize">
              {{ formatLabel(key) }}
            </p>

            <p
              class="mt-1 text-sm"
              :style="{ color: 'var(--text-secondary)' }"
            >
              Toggle dashboard widget visibility
            </p>
          </div>

          <button
            class="relative h-7 w-14 rounded-full transition"
            :class="
              value
                ? 'bg-blue-400'
                : 'bg-slate-600'
            "
            @click="toggleWidget(key)"
          >
            <span
              class="absolute top-1 h-5 w-5 rounded-full bg-white transition"
              :class="
                value
                  ? 'left-8'
                  : 'left-1'
              "
            />
          </button>
        </div>
      </div>
    </div>
  </Transition>

  <button
    class="fixed bottom-6 right-6 z-[110] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-2xl"
    @click="open = true"
  >
    <Settings class="h-7 w-7 text-black" />
  </button>
</template>

<script setup>
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { Settings } from 'lucide-vue-next'

import { useDashboardStore } from '@/stores/dashboardStore'

const open = ref(false)

const dashboardStore = useDashboardStore()

const { widgets } =
  storeToRefs(dashboardStore)

const { toggleWidget } = dashboardStore

const formatLabel = value =>
  value.replace(/([A-Z])/g, ' $1')
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>