<template>
  <RouterLink
    :to="item.path"
    class="group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300"
    :class="
      isActive
        ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    "
  >
    <component
      :is="item.icon"
      class="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
    />

    <span class="text-sm font-medium">
      {{ item.name }}
    </span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

const isActive = computed(() => route.path === props.item.path)
</script>