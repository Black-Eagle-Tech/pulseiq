import { ref, onMounted } from 'vue'

export function useCountUp(target, duration = 1200) {
  const count = ref(0)

  onMounted(() => {
    const start = 0
    const startTime = performance.now()

    const animate = currentTime => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      )

      count.value = Math.floor(
        progress * (target - start) + start
      )

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  })

  return {
    count,
  }
}