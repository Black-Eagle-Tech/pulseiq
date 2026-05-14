<template>
  <GlassCard class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h3
          class="text-xl font-bold"
          :style="{ color: 'var(--text-primary)' }"
        >
          Revenue Analytics
        </h3>

        <p
          class="mt-1 text-sm"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Monthly performance overview
        </p>
      </div>

      <div
        class="rounded-2xl border px-4 py-2 text-sm"
        :style="{
          background: 'var(--surface)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-secondary)',
        }"
      >
        Last 6 months
      </div>
    </div>

    <Line :data="chartData" :options="chartOptions" />
  </GlassCard>
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

import { Line } from 'vue-chartjs'

import GlassCard from '@/components/ui/GlassCard.vue'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

  datasets: [
    {
      data: [12000, 19000, 15000, 26000, 32000, 48400],

      tension: 0.45,

      fill: true,

      borderWidth: 3,

      borderColor: '#4DA2FF',

      pointRadius: 0,

      backgroundColor: context => {
        const chart = context.chart

        const { ctx, chartArea } = chart

        if (!chartArea) return null

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        )

        gradient.addColorStop(
          0,
          'rgba(77,162,255,0.35)'
        )

        gradient.addColorStop(
          1,
          'rgba(77,162,255,0)'
        )

        return gradient
      },
    },
  ],
}

const chartOptions = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: '#0F172A',

      borderColor: 'rgba(255,255,255,0.08)',

      borderWidth: 1,

      padding: 12,

      displayColors: false,
    },
  },

  scales: {
    x: {
      ticks: {
        color: '#94A3B8',
      },

      grid: {
        display: false,
      },

      border: {
        display: false,
      },
    },

    y: {
      ticks: {
        color: '#94A3B8',
      },

      grid: {
        color: 'rgba(255,255,255,0.05)',
      },

      border: {
        display: false,
      },
    },
  },
}
</script>

<style scoped>
canvas {
  height: 260px !important;
}

@media (min-width: 768px) {
  canvas {
    height: 320px !important;
  }
}
</style>