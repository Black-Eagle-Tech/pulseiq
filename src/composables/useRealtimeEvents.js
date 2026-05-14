import { onMounted, onUnmounted } from 'vue'

import { useToast } from 'vue-toastification'

import { useNotificationStore } from '@/stores/notificationStore'

const events = [
  'New enterprise signup detected',
  'Revenue spike identified',
  'AI recommendation generated',
  'Campaign performance improved',
  'Realtime traffic surge detected',
  'Workspace activity updated',
  'Analytics export completed',
  'New CRM lead added',
]

export function useRealtimeEvents() {
  const toast = useToast()

  const notificationStore =
    useNotificationStore()

  let interval = null

  onMounted(() => {
    interval = setInterval(() => {
      const randomEvent =
        events[
          Math.floor(
            Math.random() * events.length
          )
        ]

      notificationStore.addNotification(
        randomEvent
      )

      toast.info(randomEvent)
    }, 9000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })
}