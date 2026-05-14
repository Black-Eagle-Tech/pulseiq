<template>
  <GlassCard>
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-black">
          CRM Pipeline
        </h3>

        <p
          class="mt-2 text-sm"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Active business opportunities
        </p>
      </div>

      <button
        class="rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-300 px-4 py-2 font-semibold text-black"
      >
        New Lead
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="lead in crmLeads"
        :key="lead.id"
        class="rounded-2xl border p-5"
        :style="{
          borderColor: 'var(--border-color)',
          background: 'rgba(255,255,255,0.03)',
        }"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-lg font-bold">
              {{ lead.company }}
            </p>

            <p
              class="mt-1 text-sm"
              :style="{ color: 'var(--text-secondary)' }"
            >
              Potential value: {{ lead.value }}
            </p>
          </div>

          <div
            class="rounded-full px-3 py-1 text-sm"
            :class="
              lead.status === 'Won'
                ? 'bg-emerald-500/20 text-emerald-300'
                : lead.status === 'Negotiation'
                ? 'bg-amber-500/20 text-amber-300'
                : 'bg-blue-500/20 text-blue-300'
            "
          >
            {{ lead.status }}
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'

import { crmLeads } from '@/data/crm'
</script>