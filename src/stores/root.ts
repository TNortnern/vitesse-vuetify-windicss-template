import { defineStore } from 'pinia'
// import api from '~/api'
interface RootState {
  appLoading: boolean
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    appLoading: false,
  }),
  getters: {
  },
  actions: {
    async initialize() {
    },
  },
})
