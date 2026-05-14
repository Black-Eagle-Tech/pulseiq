<template>
  <div class="space-y-6">
    <div
      class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      <GlassCard
        v-for="item in 4"
        :key="item"
      >
        <div class="space-y-4">
          <SkeletonBox height="h-5 w-24" />

          <SkeletonBox height="h-10 w-32" />

          <SkeletonBox height="h-4 w-20" />
        </div>
      </GlassCard>
    </div>

    <div class="grid gap-6 xl:grid-cols-3">
      <GlassCard class="xl:col-span-2">
        <div class="space-y-6">
          <SkeletonBox height="h-6 w-52" />

          <SkeletonBox height="h-[300px] w-full" />
        </div>
      </GlassCard>

      <GlassCard>
        <div class="space-y-5">
          <SkeletonBox height="h-6 w-40" />

          <SkeletonBox
            v-for="item in 4"
            :key="item"
            height="h-20 w-full"
          />
        </div>
      </GlassCard>
    </div>
  </div>
</template>

<script setup>
import GlassCard from '@/components/ui/GlassCard.vue'

import SkeletonBox from '@/components/ui/SkeletonBox.vue'
</script>