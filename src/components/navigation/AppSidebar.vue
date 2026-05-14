<template>
  <div>
    <Transition name="fade">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        @click="closeSidebar"
      />
    </Transition>

    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-[290px] flex-col border-r transition-transform duration-300 lg:static lg:w-72 lg:translate-x-0"
      :class="
        sidebarOpen
          ? 'translate-x-0'
          : '-translate-x-full'
      "
      :style="{
        background: 'var(--surface)',
        borderColor: 'var(--border-color)',
      }"
    >
      <div class="border-b p-6">
        <h1
          class="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-black text-transparent"
        >
          PulseIQ
        </h1>

        <p class="mt-2 text-sm text-slate-400">
          AI Analytics Platform
        </p>
      </div>

      <nav class="flex flex-1 flex-col gap-2 p-4">
        <SidebarItem
          v-for="item in navigationItems"
          :key="item.path"
          :item="item"
        />
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import SidebarItem from './SidebarItem.vue'

import { navigationItems } from '@/data/navigation'

import { useUiStore } from '@/stores/uiStore'

const uiStore = useUiStore()

const { sidebarOpen } = storeToRefs(uiStore)

const { closeSidebar } = uiStore
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>