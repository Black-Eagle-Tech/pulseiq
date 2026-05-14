<template>
  <GlassCard class="relative overflow-hidden">
    <div
      class="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
    />

    <div class="relative">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold">
            Realtime Activity
          </h3>

          <p
            class="mt-1 text-sm"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Live platform events
          </p>
        </div>

        <div class="flex items-center gap-2">
          <div
            class="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"
          />

          <span
            class="text-sm font-medium text-emerald-400"
          >
            Live
          </span>
        </div>
      </div>

      <div class="space-y-4">
        <div
          v-for="item in activity"
          :key="item.id"
          class="flex items-start gap-4 rounded-2xl border p-4 transition hover:translate-x-1"
          :style="{
            borderColor: 'var(--border-color)',
            background: 'rgba(255,255,255,0.03)',
          }"
        >
          <div
            class="mt-1 h-3 w-3 rounded-full bg-cyan-400"
          />

          <div class="flex-1">
            <p class="font-medium">
              {{ item.title }}
            </p>

            <p
              class="mt-1 text-sm"
              :style="{ color: 'var(--text-secondary)' }"
            >
              {{ item.time }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import GlassCard from '@/components/ui/GlassCard.vue'

const activity = ref([
  {
    id: 1,
    title: 'New enterprise user registered',
    time: 'Just now',
  },
  {
    id: 2,
    title: 'Revenue analytics updated',
    time: '1 minute ago',
  },
  {
    id: 3,
    title: 'AI recommendation generated',
    time: '4 minutes ago',
  },
])

onMounted(() => {
  const interval = setInterval(() => {
    activity.value.unshift({
      id: Date.now(),
      title: 'Live traffic spike detected',
      time: 'Just now',
    })

    if (activity.value.length > 5) {
      activity.value.pop()
    }
  }, 7000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>