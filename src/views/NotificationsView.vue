<template>
  <DashboardLayout>
    <div class="space-y-8">
      <section>
        <h1
          class="text-5xl font-black tracking-tight"
        >
          Notifications
        </h1>

        <p
          class="mt-4 max-w-3xl text-lg"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Monitor realtime platform alerts,
          activity updates, AI recommendations,
          and business events.
        </p>
      </section>

      <NotificationCenter />
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import NotificationCenter from '@/components/widgets/NotificationCenter.vue'
</script>