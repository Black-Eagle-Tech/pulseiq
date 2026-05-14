<template>
  <div
    class="animate-pulse rounded-2xl bg-white/5"
    :class="height"
  />
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: 'h-24',
  },
})
</script>