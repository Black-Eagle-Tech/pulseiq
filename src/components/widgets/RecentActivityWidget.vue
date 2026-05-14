<template>
  <GlassCard class="p-6">
    <div class="mb-6">
      <h3 class="text-xl font-bold text-white">
        Recent Activity
      </h3>

      <p class="mt-1 text-sm text-slate-400">
        Latest platform events
      </p>
    </div>

    <div class="space-y-4">
      <div
        v-for="activity in recentActivity"
        :key="activity.title"
        class="flex items-start justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        <div>
          <p class="font-medium text-white">
            {{ activity.title }}
          </p>

          <p class="mt-1 text-sm text-slate-400">
            {{ activity.time }}
          </p>
        </div>

        <div
          class="mt-1 h-3 w-3 rounded-full bg-emerald-400"
        />
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'
import { recentActivity } from '@/data/dashboard'
</script>