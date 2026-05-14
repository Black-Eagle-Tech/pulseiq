<template>
  <GlassCard>
    <div class="mb-6">
      <h3 class="text-xl font-bold">
        Top Campaigns
      </h3>

      <p
        class="mt-1 text-sm"
        :style="{ color: 'var(--text-secondary)' }"
      >
        Best performing marketing campaigns
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr
            class="border-b"
            :style="{ borderColor: 'var(--border-color)' }"
          >
            <th class="pb-4 text-left">
              Campaign
            </th>

            <th class="pb-4 text-left">
              Conversion
            </th>

            <th class="pb-4 text-left">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="campaign in campaigns"
            :key="campaign.id"
            class="border-b"
            :style="{ borderColor: 'var(--border-color)' }"
          >
            <td class="py-4 pr-6 font-medium">
              {{ campaign.name }}
            </td>

            <td class="py-4 pr-6">
              {{ campaign.conversion }}
            </td>

            <td class="py-4 font-semibold text-emerald-400">
              {{ campaign.revenue }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </GlassCard>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'

const campaigns = [
  {
    id: 1,
    name: 'Summer Launch',
    conversion: '8.2%',
    revenue: '$12,400',
  },
  {
    id: 2,
    name: 'AI Automation',
    conversion: '6.7%',
    revenue: '$9,870',
  },
  {
    id: 3,
    name: 'Growth Ads',
    conversion: '5.9%',
    revenue: '$7,210',
  },
]
</script>