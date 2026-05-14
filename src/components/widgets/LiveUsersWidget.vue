<template>
  <GlassCard class="relative overflow-hidden">
    <div
      class="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
    />

    <div class="relative">
      <div class="flex items-center justify-between">
        <div>
          <p
            class="text-sm"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Live Users
          </p>

          <h3 class="mt-3 text-5xl font-black">
            2,847
          </h3>
        </div>

        <div
          class="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10"
        >
          <div
            class="h-4 w-4 rounded-full bg-emerald-400 animate-pulse"
          />
        </div>
      </div>

      <div class="mt-6">
        <div
          class="h-3 overflow-hidden rounded-full bg-white/10"
        >
          <div
            class="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
          />
        </div>

        <div class="mt-3 flex justify-between text-sm">
          <span
            :style="{ color: 'var(--text-secondary)' }"
          >
            Server load
          </span>

          <span class="font-semibold">
            72%
          </span>
        </div>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'
</script>