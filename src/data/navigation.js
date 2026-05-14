import {
  LayoutDashboard,
  BarChart3,
  Sparkles,
  Bell,
  FileText,
  Settings,
  CreditCard,
} from 'lucide-vue-next'

export const navigationItems = [
  {
    label: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },

  {
    label: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
  },

  {
    label: 'AI Insights',
    path: '/ai-insights',
    icon: Sparkles,
  },

  {
    label: 'Reports',
    path: '/reports',
    icon: FileText,
  },

  {
    label: 'Notifications',
    path: '/notifications',
    icon: Bell,
  },

  {
    label: 'Workspace',
    path: '/settings',
    icon: Settings,
  },

  {
    label: 'Billing',
    path: '/billing',
    icon: CreditCard,
  },
]