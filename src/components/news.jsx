import useJikan from '@/store/useJikan'
import React, { useEffect } from 'react'

const News = () => {
  const { news, fetchNews } = useJikan()

  useEffect(() => {
    !news?.data?.length && fetchNews()
  }, [news?.data?.length])

  useEffect(() => {
    console.log({ news, fetchNews })
  }, [news])

  return <section>News</section>
}

export default News
