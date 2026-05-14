<template>
  <GlassCard>
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h3 class="text-xl font-bold">
          Notifications
        </h3>

        <p
          class="mt-1 text-sm"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Realtime platform events
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
        v-for="item in items"
        :key="item.id"
        class="rounded-2xl border p-4"
        :style="{
          borderColor: 'var(--border-color)',
          background: 'rgba(255,255,255,0.03)',
        }"
      >
        <p class="font-medium">
          {{ item.message }}
        </p>

        <p
          class="mt-2 text-sm"
          :style="{ color: 'var(--text-secondary)' }"
        >
          {{ item.time }}
        </p>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import GlassCard from '@/components/ui/GlassCard.vue'

import { useNotificationStore } from '@/stores/notificationStore'

const notificationStore =
  useNotificationStore()

const { items } =
  storeToRefs(notificationStore)
</script>