<template>
  <GlassCard
    hoverable
    class="group relative overflow-hidden"
  >
    <div
      class="absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"
      :class="
        positive
          ? 'bg-emerald-500/10'
          : 'bg-blue-500/10'
      "
    />

    <div class="relative">
      <div class="flex items-center justify-between">
        <p
          class="text-sm"
          :style="{ color: 'var(--text-secondary)' }"
        >
          {{ title }}
        </p>

        <div
          class="h-2 w-2 rounded-full animate-pulse"
          :class="
            positive
              ? 'bg-emerald-400'
              : 'bg-blue-400'
          "
        />
      </div>

      <div class="mt-5 flex items-end justify-between">
        <h3
          class="text-4xl font-black tracking-tight"
          :style="{ color: 'var(--text-primary)' }"
        >
          {{ formattedValue }}
        </h3>

        <span
          class="rounded-full px-3 py-1 text-sm font-semibold"
          :class="
            positive
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-blue-500/10 text-blue-300'
          "
        >
          {{ growth }}
        </span>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import { computed } from 'vue'

import GlassCard from '@/components/ui/GlassCard.vue'

import { useCountUp } from '@/composables/useCountUp'

const props = defineProps({
  title: String,
  value: Number,
  growth: String,
  prefix: {
    type: String,
    default: '',
  },
  suffix: {
    type: String,
    default: '',
  },
})

const positive = computed(() =>
  props.growth.includes('+')
)

const { count } = useCountUp(props.value)

const formattedValue = computed(() => {
  return `${props.prefix}${count.value.toLocaleString()}${props.suffix}`
})
</script>