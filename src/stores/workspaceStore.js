import { defineStore } from 'pinia'

export const useWorkspaceStore = defineStore(
  'workspace',
  {
    state: () => ({
      activeWorkspace: 'PulseIQ',
    }),

    actions: {
      setWorkspace(name) {
        this.activeWorkspace = name
      },
    },
  }
)