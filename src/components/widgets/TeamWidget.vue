<template>
  <GlassCard>
    <div class="mb-6">
      <h3 class="text-2xl font-black">
        Team Members
      </h3>

      <p
        class="mt-2 text-sm"
        :style="{ color: 'var(--text-secondary)' }"
      >
        Workspace collaboration overview
      </p>
    </div>

    <div class="space-y-4">
      <div
        v-for="member in teamMembers"
        :key="member.id"
        class="flex items-center justify-between rounded-2xl border p-4"
        :style="{
          borderColor: 'var(--border-color)',
          background: 'rgba(255,255,255,0.03)',
        }"
      >
        <div class="flex items-center gap-4">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 font-bold text-black"
          >
            {{ member.name.charAt(0) }}
          </div>

          <div>
            <p class="font-semibold">
              {{ member.name }}
            </p>

            <p
              class="text-sm"
              :style="{ color: 'var(--text-secondary)' }"
            >
              {{ member.role }}
            </p>
          </div>
        </div>

        <div
          class="rounded-full px-3 py-1 text-sm"
          :class="
            member.status === 'Online'
              ? 'bg-emerald-500/20 text-emerald-300'
              : member.status === 'Offline'
              ? 'bg-slate-500/20 text-slate-300'
              : 'bg-amber-500/20 text-amber-300'
          "
        >
          {{ member.status }}
        </div>
      </div>
    </div>
  </GlassCard>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'

import { teamMembers } from '@/data/team'
</script>