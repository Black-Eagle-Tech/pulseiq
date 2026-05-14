import { defineStore } from 'pinia'

export const useNotificationStore =
  defineStore('notifications', {
    state: () => ({
      items: [
        {
          id: 1,
          message:
            'AI generated a new recommendation',
          time: 'Just now',
        },
      ],
    }),

    actions: {
      addNotification(message) {
        this.items.unshift({
          id: Date.now(),
          message,
          time: 'Just now',
        })

        if (this.items.length > 12) {
          this.items.pop()
        }
      },
    },
  })