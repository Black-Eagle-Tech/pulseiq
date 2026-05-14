<template>
  <DashboardLayout>
    <div class="space-y-8">
      <section>
        <h1
          class="text-5xl font-black tracking-tight"
        >
          AI Insights
        </h1>

        <p
          class="mt-4 max-w-3xl text-lg"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Generate AI-powered recommendations based
          on business performance, analytics, and
          simulated platform intelligence.
        </p>
      </section>

      <AIGeneratorWidget />
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import AIGeneratorWidget from '@/components/widgets/AIGeneratorWidget.vue'
</script>