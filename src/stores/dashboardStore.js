import { defineStore } from 'pinia'

export const useDashboardStore = defineStore(
  'dashboard',
  {
    state: () => ({
      widgets: {
        revenueChart: true,
        aiInsights: true,
        campaigns: true,
        liveUsers: true,
        activity: true,
        goals: true,
      },
    }),

    actions: {
      toggleWidget(widget) {
        this.widgets[widget] =
          !this.widgets[widget]
      },
    },
  }
)