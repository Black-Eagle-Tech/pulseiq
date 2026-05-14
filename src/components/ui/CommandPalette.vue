<template>
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
      @click="close"
    >
      <div
        class="w-full max-w-2xl overflow-hidden rounded-3xl border"
        :style="{
          background: 'rgba(15,23,42,0.95)',
          borderColor: 'var(--border-color)',
        }"
        @click.stop
      >
        <div
          class="border-b p-4"
          :style="{ borderColor: 'var(--border-color)' }"
        >
          <input
            v-model="search"
            type="text"
            placeholder="Search anything..."
            class="w-full bg-transparent text-lg outline-none"
            :style="{ color: 'var(--text-primary)' }"
            autofocus
          />
        </div>

        <div class="max-h-[420px] overflow-y-auto p-2">
          <button
            v-for="item in filteredItems"
            :key="item.path"
            class="flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/5"
            @click="navigate(item.path)"
          >
            <div
              class="mt-1 h-2 w-2 rounded-full bg-blue-400"
            />

            <div>
              <p class="font-semibold">
                {{ item.title }}
              </p>

              <p
                class="mt-1 text-sm"
                :style="{ color: 'var(--text-secondary)' }"
              >
                {{ item.description }}
              </p>
            </div>
          </button>
        </div>

        <div
          class="border-t px-4 py-3 text-sm"
          :style="{
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }"
        >
          Press ESC to close
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { storeToRefs } from 'pinia'

import { useRouter } from 'vue-router'

import { useCommandStore } from '@/stores/commandStore'

import { commandItems } from '@/data/commands'

const router = useRouter()

const commandStore = useCommandStore()

const { open } = storeToRefs(commandStore)

const { close, toggle } = commandStore

const search = ref('')

const filteredItems = computed(() => {
  return commandItems.filter(item =>
    item.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
})

const navigate = path => {
  router.push(path)

  close()

  search.value = ''
}

const handleKeyboard = event => {
  const isShortcut =
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === 'k'

  if (isShortcut) {
    event.preventDefault()

    toggle()
  }

  if (event.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
})

onUnmounted(() => {
  window.removeEventListener(
    'keydown',
    handleKeyboard
  )
})
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