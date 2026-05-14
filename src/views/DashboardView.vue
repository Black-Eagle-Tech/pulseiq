<template>
  <DashboardLayout>
    <div class="space-y-8">
      <section>
        <h1
          class="text-4xl font-black tracking-tight"
          :style="{ color: 'var(--text-primary)' }"
        >
          Business Overview
        </h1>

        <p
          class="mt-3 max-w-2xl"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Monitor your growth, analyze traffic trends,
          and generate AI-powered business insights.
        </p>
      </section>

      <PageLoader v-if="loading" />

      <template v-else>
        <KpiGrid />

        <section class="grid gap-6 xl:grid-cols-3">
          <div
            v-if="widgets.revenueChart"
            class="xl:col-span-2"
          >
            <RevenueChart />
          </div>

          <AIInsightsWidget
            v-if="widgets.aiInsights"
          />
        </section>

        <section class="grid gap-6 xl:grid-cols-3">
          <div
            v-if="widgets.campaigns"
            class="xl:col-span-2"
          >
            <TopCampaignsTable />
          </div>

          <LiveUsersWidget
            v-if="widgets.liveUsers"
          />
        </section>

        <section class="grid gap-6 xl:grid-cols-3">
          <div
            v-if="widgets.activity"
            class="xl:col-span-2"
          >
            <RecentActivityWidget />
          </div>

          <GlassCard v-if="widgets.goals">
            <h3 class="text-xl font-bold">
              Goal Progress
            </h3>

            <div class="mt-6">
              <div class="mb-3 flex justify-between">
                <span
                  :style="{ color: 'var(--text-secondary)' }"
                >
                  Monthly Revenue Goal
                </span>

                <span class="font-semibold">
                  78%
                </span>
              </div>

              <div
                class="h-4 overflow-hidden rounded-full bg-white/10"
              >
                <div
                  class="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                />
              </div>

              <p
                class="mt-4 text-sm"
                :style="{ color: 'var(--text-secondary)' }"
              >
                $78,000 of $100,000 target reached.
              </p>
            </div>
          </GlassCard>
        </section>
      </template>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { onMounted } from 'vue'

import { storeToRefs } from 'pinia'

import DashboardLayout from '@/layouts/DashboardLayout.vue'

import GlassCard from '@/components/ui/GlassCard.vue'

import PageLoader from '@/components/ui/PageLoader.vue'

import KpiGrid from '@/components/dashboard/KpiGrid.vue'

import RevenueChart from '@/components/charts/RevenueChart.vue'

import AIInsightsWidget from '@/components/widgets/AIInsightsWidget.vue'

import RecentActivityWidget from '@/components/widgets/RecentActivityWidget.vue'

import TopCampaignsTable from '@/components/widgets/TopCampaignsTable.vue'

import LiveUsersWidget from '@/components/widgets/LiveUsersWidget.vue'

import { useAppStore } from '@/stores/appStore'

import { useDashboardStore } from '@/stores/dashboardStore'

const appStore = useAppStore()

const dashboardStore = useDashboardStore()

const { loading } = storeToRefs(appStore)

const { widgets } =
  storeToRefs(dashboardStore)

const { finishLoading } = appStore

onMounted(() => {
  setTimeout(() => {
    finishLoading()
  }, 1800)
})
</script>