<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
      y: 18,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 350,
      },
    }"
    class="rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300"
    :class="[
      hoverable &&
        'hover:-translate-y-1 hover:shadow-2xl',
    ]"
    :style="{
      background: 'var(--surface)',
      borderColor: 'var(--border-color)',
    }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: false,
  },
})
</script>