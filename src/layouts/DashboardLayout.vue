<template>
  <div
    class="relative flex min-h-screen overflow-hidden"
    :style="{
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
    }"
  >
    <FloatingOrb />

    <AppSidebar />

    <div
      class="relative z-10 flex min-w-0 flex-1 flex-col overflow-hidden"
    >
      <TopNavbar />

      <main
        class="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/navigation/AppSidebar.vue'

import TopNavbar from '@/components/navigation/TopNavbar.vue'

import FloatingOrb from '@/components/ui/FloatingOrb.vue'
</script>