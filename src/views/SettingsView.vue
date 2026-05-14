<template>
  <DashboardLayout>
    <div class="space-y-8">
      <section>
        <h1
          class="text-5xl font-black tracking-tight"
        >
          Workspace Settings
        </h1>

        <p
          class="mt-4 max-w-3xl text-lg"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Manage team members, workspace
          collaboration, and customer pipelines.
        </p>
      </section>

      <section class="grid gap-6 xl:grid-cols-2">
        <TeamWidget />

        <CRMWidget />
      </section>
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import TeamWidget from '@/components/widgets/TeamWidget.vue'

import CRMWidget from '@/components/widgets/CRMWidget.vue'
</script>