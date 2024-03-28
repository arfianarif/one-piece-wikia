import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const buildUrlWithQueryParams = (url, queryOptions) => {
  const queryParams = new URLSearchParams(queryOptions).toString()
  return url + (queryParams ? `?${queryParams}` : '')
}
