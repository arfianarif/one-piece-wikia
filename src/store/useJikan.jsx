import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useJikan = create(
  persist(
    (set, get) => ({
      data: {
        characters: [],
      },
      setData: (value) => set({ data: value }),
    }),
    {
      name: 'jikan', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useJikan
