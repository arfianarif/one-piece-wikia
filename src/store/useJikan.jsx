import jikanServices from '@/services/jikan'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import useApp from './useApp'

const useJikan = create(
  persist(
    (set, get) => ({
      data: undefined,
      setData: (value) => set({ data: value }),
      characters: {
        data: [],
        isLoading: false,
        error: '',
      },
      fetchCharacters: async () => {
        try {
          const id = get().data?.id
          set((state) => {
            return {
              characters: {
                ...state.characters,
                isLoading: true,
                error: '',
              },
            }
          })
          const response = await jikanServices.getData({
            url: `/anime/${id}/characters`,
          })
          set((state) => {
            return {
              characters: {
                ...state.characters,
                isLoading: false,
                data: response?.data,
                error: '',
              },
            }
          })
        } catch (error) {
          console.error('Error fetching data:', error.message)
          set((state) => {
            return {
              characters: {
                ...state.characters,
                isLoading: false,
                error: 'Error fetching data:' + error.message,
              },
            }
          })
        }
      },
      news: {
        data: [],
        isLoading: false,
        error: '',
      },
      fetchNews: async () => {
        try {
          console.log('Fetching news,..')
          const id = get().data?.id
          console.log({ id })
          set((state) => {
            return {
              news: {
                ...state.news,
                isLoading: true,
                error: '',
              },
            }
          })
          const response = await jikanServices.getData({
            url: `/anime/${id}/news`,
          })
          set((state) => {
            return {
              news: {
                ...state.news,
                isLoading: false,
                data: response?.data,
                error: '',
              },
            }
          })
        } catch (error) {
          console.error('Error fetching data:', error.message)
          set((state) => {
            return {
              news: {
                ...state.news,
                isLoading: false,
                error: 'Error fetching data:' + error.message,
              },
            }
          })
        }
      },
      pictures: {
        data: [],
        isLoading: false,
        error: '',
      },
      fetchPictures: async () => {
        try {
          console.log('Fetching pictures,..')
          const id = get().data?.id
          console.log({ id })
          set((state) => {
            return {
              pictures: {
                ...state.pictures,
                isLoading: true,
                error: '',
              },
            }
          })
          const response = await jikanServices.getData({
            url: `/anime/${id}/pictures`,
          })
          set((state) => {
            return {
              pictures: {
                ...state.pictures,
                isLoading: false,
                data: response?.data,
                error: '',
              },
            }
          })
        } catch (error) {
          console.error('Error fetching data:', error.message)
          set((state) => {
            return {
              pictures: {
                ...state.pictures,
                isLoading: false,
                error: 'Error fetching data:' + error.message,
              },
            }
          })
        }
      },
    }),
    {
      name: 'jikan', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useJikan
