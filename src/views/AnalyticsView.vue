<template>
  <DashboardLayout>
    <div class="space-y-8">
      <section>
        <h1
          class="text-5xl font-black tracking-tight"
        >
          Analytics
        </h1>

        <p
          class="mt-4 max-w-3xl text-lg"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Monitor engagement, traffic behavior,
          realtime events, and platform growth.
        </p>
      </section>

      <section class="grid gap-6 xl:grid-cols-3">
        <div class="xl:col-span-2">
          <RealtimeActivityWidget />
        </div>

        <NotificationCenter />
      </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <AnalyticsHeatmap />

        <RevenueChart />
      </section>
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import RevenueChart from '@/components/charts/RevenueChart.vue'

import AnalyticsHeatmap from '@/components/widgets/AnalyticsHeatmap.vue'

import NotificationCenter from '@/components/widgets/NotificationCenter.vue'

import RealtimeActivityWidget from '@/components/widgets/RealtimeActivityWidget.vue'
</script>