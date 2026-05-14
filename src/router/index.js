import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () =>
      import('@/views/DashboardView.vue'),
  },

  {
    path: '/analytics',
    name: 'analytics',
    component: () =>
      import('@/views/AnalyticsView.vue'),
  },

  {
    path: '/ai-insights',
    name: 'ai-insights',
    component: () =>
      import('@/views/AIInsightsView.vue'),
  },

  {
    path: '/reports',
    name: 'reports',
    component: () =>
      import('@/views/ReportsView.vue'),
  },

  {
    path: '/notifications',
    name: 'notifications',
    component: () =>
      import(
        '@/views/NotificationsView.vue'
      ),
  },

  {
    path: '/settings',
    name: 'settings',
    component: () =>
      import('@/views/SettingsView.vue'),
  },

  {
    path: '/billing',
    name: 'billing',
    component: () =>
      import('@/views/BillingView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),

  routes,
})

export default router