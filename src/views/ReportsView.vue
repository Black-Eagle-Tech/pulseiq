<template>
  <DashboardLayout>
    <div class="space-y-8">
      <section>
        <h1
          class="text-5xl font-black tracking-tight"
        >
          Reports & Exports
        </h1>

        <p
          class="mt-4 max-w-3xl text-lg"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Generate business reports, export
          analytics data, and manage reporting
          workflows.
        </p>
      </section>

      <ReportsWidget />
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import ReportsWidget from '@/components/widgets/ReportsWidget.vue'
</script>