<template>
  <DashboardLayout>
    <div class="space-y-10">
      <section>
        <h1
          class="text-5xl font-black tracking-tight"
        >
          Billing & Subscription
        </h1>

        <p
          class="mt-4 max-w-3xl text-lg"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Manage subscription plans, monitor
          workspace usage, and scale your
          business infrastructure.
        </p>
      </section>

      <BillingPlans />

      <UsageOverview />
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import BillingPlans from '@/components/widgets/BillingPlans.vue'

import UsageOverview from '@/components/widgets/UsageOverview.vue'
</script>