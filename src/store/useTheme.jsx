import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useTheme = create(
  persist(
    (set, get) => ({
      isDark: false,
      setIsDark: (value) => set({ isDark: value }),
    }),
    {
      name: 'theme', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useTheme
