<template>
  <GlassCard>
    <div class="mb-8">
      <h3 class="text-2xl font-black">
        Usage Overview
      </h3>

      <p
        class="mt-2 text-sm"
        :style="{ color: 'var(--text-secondary)' }"
      >
        Workspace resource utilization
      </p>
    </div>

    <div class="space-y-8">
      <div
        v-for="item in usageStats"
        :key="item.label"
      >
        <div class="mb-3 flex justify-between">
          <span
            :style="{ color: 'var(--text-secondary)' }"
          >
            {{ item.label }}
          </span>

          <span class="font-semibold">
            {{ item.value }}
          </span>
        </div>

        <div
          class="h-4 overflow-hidden rounded-full bg-white/10"
        >
          <div
            class="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
            :style="{ width: item.value }"
          />
        </div>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'

import { usageStats } from '@/data/billing'
</script>