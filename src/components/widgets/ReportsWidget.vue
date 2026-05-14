<template>
  <GlassCard>
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-black">
          Export Center
        </h3>

        <p
          class="mt-2 text-sm"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Generate and export analytics reports
        </p>
      </div>

      <button
        class="rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-300 px-5 py-3 font-semibold text-black"
        @click="open = true"
      >
        Generate Report
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="report in reports"
        :key="report.id"
        class="flex items-center justify-between rounded-2xl border p-5"
        :style="{
          borderColor: 'var(--border-color)',
          background: 'rgba(255,255,255,0.03)',
        }"
      >
        <div>
          <p class="font-semibold">
            {{ report.name }}
          </p>

          <p
            class="mt-1 text-sm"
            :style="{ color: 'var(--text-secondary)' }"
          >
            {{ report.type }} • {{ report.date }}
          </p>
        </div>

        <button
          class="rounded-xl border px-4 py-2 text-sm transition hover:bg-white/5"
          :style="{
            borderColor: 'var(--border-color)',
          }"
        >
          Download
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      >
        <div
          class="w-full max-w-lg rounded-[32px] border p-8"
          :style="{
            background: 'rgba(15,23,42,0.96)',
            borderColor: 'var(--border-color)',
          }"
        >
          <h2 class="text-3xl font-black">
            Generate Report
          </h2>

          <p
            class="mt-3"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Select export format and generate a
            simulated analytics report.
          </p>

          <div class="mt-8 grid gap-4">
            <button
              v-for="format in formats"
              :key="format"
              class="rounded-2xl border p-5 text-left transition hover:bg-white/5"
              :style="{
                borderColor: 'var(--border-color)',
              }"
              @click="generateReport(format)"
            >
              <p class="text-lg font-bold">
                {{ format }}
              </p>

              <p
                class="mt-1 text-sm"
                :style="{ color: 'var(--text-secondary)' }"
              >
                Export analytics data as {{ format }}
              </p>
            </button>
          </div>

          <div
            v-if="loading"
            class="mt-8 rounded-2xl border p-5"
            :style="{
              borderColor: 'var(--border-color)',
              background: 'rgba(255,255,255,0.03)',
            }"
          >
            <div class="flex items-center gap-3">
              <div
                class="h-3 w-3 rounded-full bg-blue-400 animate-pulse"
              />

              <p class="font-medium">
                Generating report...
              </p>
            </div>
          </div>

          <button
            class="mt-8 w-full rounded-2xl border py-3"
            :style="{
              borderColor: 'var(--border-color)',
            }"
            @click="open = false"
          >
            Cancel
          </button>
        </div>
      </div>
    </Transition>
  </GlassCard>
</template>

<script setup>
import { ref } from 'vue'

import { useToast } from 'vue-toastification'

import GlassCard from '@/components/ui/GlassCard.vue'

import { reports } from '@/data/reports'

const toast = useToast()

const open = ref(false)

const loading = ref(false)

const formats = ['PDF', 'CSV', 'JSON']

const generateReport = async format => {
  loading.value = true

  await new Promise(resolve =>
    setTimeout(resolve, 1800)
  )

  loading.value = false

  open.value = false

  toast.success(`${format} report generated`)
}
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