import { API_JIKAN } from '@/config/app'
import { buildUrlWithQueryParams } from '@/lib/utils'
import useApp from '@/store/useApp'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const { app, setApp } = useApp()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const parseSelectedData = useCallback(
    (res) => {
      const parsed = res?.data?.find((item) => item.title === 'One Piece')
      if (parsed) {
        const { mal_id, ...rest } = parsed
        const newData = {
          id: mal_id,
          ...rest,
        }
        return setApp(newData)
      }
      setError('error when building app')
      setApp(undefined)
      return
    },
    [app] // Depend on app to avoid recreating the function on each render
  )

  const fetchData = async ({ url, queryOptions = {}, options = {} }) => {
    setIsLoading(true)
    setError(null)
    try {
      const urlWithParams = buildUrlWithQueryParams(url, queryOptions)
      const response = await fetch(urlWithParams, options)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const result = await response.json()
      parseSelectedData(result)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!app && !isLoading)
      fetchData({
        url: API_JIKAN + '/anime',
        queryOptions: {
          q: 'one piece',
          type: 'tv',
        },
      })
  }, [app])

  const value = useMemo(() => {
    return { isLoading, error }
  }, [isLoading, error])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
