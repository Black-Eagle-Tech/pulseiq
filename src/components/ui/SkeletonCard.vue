<template>
  <div
    class="animate-pulse rounded-3xl border p-6"
    :style="{
      background: 'var(--surface)',
      borderColor: 'var(--border-color)',
    }"
  >
    <div
      class="h-4 w-24 rounded-full bg-white/10"
    />

    <div
      class="mt-5 h-10 w-32 rounded-full bg-white/10"
    />

    <div
      class="mt-6 h-3 w-20 rounded-full bg-white/10"
    />
  </div>
</template>