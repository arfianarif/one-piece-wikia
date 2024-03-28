import { API_JIKAN } from '@/config/app'

const buildUrlWithQueryParams = (url, queryOptions) => {
  const queryParams = new URLSearchParams(queryOptions).toString()
  return url + (queryParams ? `?${queryParams}` : '')
}

const jikanServices = {
  async getData({
    url,
    queryOptions = {},
    options = {
      method: 'GET',
    },
  }) {
    try {
      const urlWithParams = buildUrlWithQueryParams(
        API_JIKAN + url,
        queryOptions
      )
      const response = await fetch(urlWithParams, options)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`)
    }
  },

  async postData(endpoint, data) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      throw new Error(`Failed to post data: ${error.message}`)
    }
  },

  // Add other API methods as needed
}

export default jikanServices
