<template>
  <GlassCard class="relative overflow-hidden">
    <div
      class="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
    />

    <div class="relative">
      <div class="flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10"
        >
          <Sparkles class="h-6 w-6 text-blue-300" />
        </div>

        <div>
          <h3 class="text-xl font-bold">
            AI Insights
          </h3>

          <p
            class="text-sm"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Smart recommendations
          </p>
        </div>
      </div>

      <div class="mt-6 space-y-4">
        <div
          v-for="insight in aiInsights"
          :key="insight"
          class="rounded-2xl border p-4"
          :style="{
            borderColor: 'var(--border-color)',
            background: 'rgba(255,255,255,0.03)',
          }"
        >
          <p
            class="text-sm leading-relaxed"
            :style="{ color: 'var(--text-primary)' }"
          >
            {{ insight }}
          </p>
        </div>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next'

import GlassCard from '@/components/ui/GlassCard.vue'

import { aiInsights } from '@/data/dashboard'
</script>