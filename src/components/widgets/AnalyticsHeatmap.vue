<template>
  <GlassCard>
    <div class="mb-6">
      <h3 class="text-xl font-bold">
        Engagement Heatmap
      </h3>

      <p
        class="mt-1 text-sm"
        :style="{ color: 'var(--text-secondary)' }"
      >
        Weekly user activity intensity
      </p>
    </div>

    <div class="grid grid-cols-7 gap-3">
      <div
        v-for="cell in cells"
        :key="cell.id"
        class="aspect-square rounded-xl transition hover:scale-105"
        :style="{
          background: `rgba(77,162,255,${cell.level})`,
        }"
      />
    </div>
  </GlassCard>
</template>

<script setup>
const cells = Array.from({ length: 49 }).map(
  (_, index) => ({
    id: index,
    level: (
      Math.random() * 0.9 +
      0.08
    ).toFixed(2),
  })
)
</script>