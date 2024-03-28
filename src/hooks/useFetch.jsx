import { buildUrlWithQueryParams } from '@/lib/utils'
import { useState, useEffect } from 'react'

const useFetch = () => {
  const [dataFetch, setDataFetch] = useState(null)
  const [loadingDataFetch, setLoadingDataFetch] = useState(false)
  const [errorDataFetch, setErrorDataFetch] = useState(null)

  const fetchData = async ({ url, queryOptions = {}, options = {} }) => {
    setLoadingDataFetch(true)
    try {
      const urlWithParams = buildUrlWithQueryParams(url, queryOptions)
      const response = await fetch(urlWithParams, options)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const result = await response.json()
      setDataFetch(result)
    } catch (error) {
      setErrorDataFetch(errorDataFetch)
    } finally {
      setLoadingDataFetch(false)
    }
  }

  return { dataFetch, loadingDataFetch, errorDataFetch, fetchData }
}

export default useFetch
