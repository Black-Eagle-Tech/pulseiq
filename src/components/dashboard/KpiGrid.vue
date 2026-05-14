<template>
  <section
    class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
  >
    <KpiCard
      v-for="card in kpiCards"
      :key="card.title"
      :title="card.title"
      :value="card.value"
      :growth="card.growth"
      :prefix="card.prefix"
      :suffix="card.suffix"
    />
  </section>
</template>

<script setup>
import KpiCard from './KpiCard.vue'

import { kpiCards } from '@/data/dashboard'
</script>