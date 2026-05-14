<template>
  <div class="grid gap-6 xl:grid-cols-3">
    <GlassCard
      v-for="plan in plans"
      :key="plan.id"
      hoverable
      class="relative overflow-hidden"
    >
      <div
        v-if="plan.featured"
        class="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 px-3 py-1 text-xs font-bold text-black"
      >
        Popular
      </div>

      <div>
        <h3 class="text-2xl font-black">
          {{ plan.name }}
        </h3>

        <p
          class="mt-2 text-5xl font-black"
        >
          {{ plan.price }}

          <span
            class="text-base font-medium"
            :style="{ color: 'var(--text-secondary)' }"
          >
            /mo
          </span>
        </p>

        <p
          class="mt-3"
          :style="{ color: 'var(--text-secondary)' }"
        >
          {{ plan.users }}
        </p>
      </div>

      <button
        class="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-300 py-3 font-semibold text-black"
      >
        Upgrade Plan
      </button>
    </GlassCard>
  </div>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'

import { plans } from '@/data/billing'
</script>