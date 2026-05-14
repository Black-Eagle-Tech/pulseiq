<template>
  <div class="relative">
    <button
      class="flex w-full items-center justify-between rounded-2xl border p-4 transition hover:bg-white/5"
      :style="{
        background: 'var(--surface)',
        borderColor: 'var(--border-color)',
      }"
      @click="open = !open"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 font-black text-black"
        >
          {{ activeWorkspace.charAt(0) }}
        </div>

        <div class="text-left">
          <p class="font-semibold">
            {{ activeWorkspace }}
          </p>

          <p
            class="text-sm"
            :style="{ color: 'var(--text-secondary)' }"
          >
            Active workspace
          </p>
        </div>
      </div>

      <ChevronDown class="h-5 w-5" />
    </button>

    <Transition name="fade">
      <div
        v-if="open"
        class="absolute left-0 right-0 top-[110%] z-50 rounded-3xl border p-2 shadow-2xl"
        :style="{
          background: 'rgba(15,23,42,0.96)',
          borderColor: 'var(--border-color)',
        }"
      >
        <button
          v-for="workspace in workspaces"
          :key="workspace.id"
          class="flex w-full items-center gap-3 rounded-2xl p-4 text-left transition hover:bg-white/5"
          @click="selectWorkspace(workspace.name)"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10"
          >
            {{ workspace.name.charAt(0) }}
          </div>

          <div>
            <p class="font-semibold">
              {{ workspace.name }}
            </p>

            <p
              class="text-sm"
              :style="{ color: 'var(--text-secondary)' }"
            >
              {{ workspace.role }}
            </p>
          </div>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { ChevronDown } from 'lucide-vue-next'

import { useToast } from 'vue-toastification'

import { workspaces } from '@/data/workspaces'

import { useWorkspaceStore } from '@/stores/workspaceStore'

const toast = useToast()

const open = ref(false)

const workspaceStore = useWorkspaceStore()

const { activeWorkspace } =
  storeToRefs(workspaceStore)

const { setWorkspace } = workspaceStore

const selectWorkspace = name => {
  setWorkspace(name)

  toast.success(`Workspace switched to ${name}`)

  open.value = false
}
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