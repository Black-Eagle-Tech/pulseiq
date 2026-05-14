<template>
  <router-view v-slot="{ Component, route }">
    <Transition
      name="page"
      mode="out-in"
    >
      <component
        :is="Component"
        :key="route.path"
      />
    </Transition>
  </router-view>

  <CommandPalette />

  <OnboardingModal />

  <SettingsDrawer />
</template>

<script setup>
import CommandPalette from '@/components/ui/CommandPalette.vue'

import OnboardingModal from '@/components/ui/OnboardingModal.vue'

import SettingsDrawer from '@/components/ui/SettingsDrawer.vue'

import { useRealtimeEvents } from '@/composables/useRealtimeEvents'

useRealtimeEvents()
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>