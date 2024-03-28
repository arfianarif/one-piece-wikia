import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useApp = create(
  persist(
    (set, get) => ({
      app: undefined,
      setApp: (value) => set({ app: value }),
    }),
    {
      name: 'app', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useApp
