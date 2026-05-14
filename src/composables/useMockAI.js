import { ref } from 'vue'

import { mockAiResponses } from '@/data/mockAiResponses'

export function useMockAI() {
  const loading = ref(false)

  const response = ref('')

  const generateInsight = async prompt => {
    if (!prompt.trim()) return

    loading.value = true

    response.value = ''

    await new Promise(resolve =>
      setTimeout(resolve, 1800)
    )

    const randomResponse =
      mockAiResponses[
        Math.floor(
          Math.random() * mockAiResponses.length
        )
      ]

    loading.value = false

    typeText(randomResponse)
  }

  const typeText = text => {
    let index = 0

    const interval = setInterval(() => {
      response.value += text[index]

      index++

      if (index >= text.length) {
        clearInterval(interval)
      }
    }, 18)
  }

  return {
    loading,
    response,
    generateInsight,
  }
}