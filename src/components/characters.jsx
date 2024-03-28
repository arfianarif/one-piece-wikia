import { API_JIKAN } from '@/config/app'
import useJikan from '@/store/useJikan'
import jikanServices from '@/services/jikan'
import React, { useEffect } from 'react'
import useApp from '@/store/useApp'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const Characters = () => {
  const { app } = useApp()
  const { data, setData } = useJikan()
  const { characters } = data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await jikanServices.getData({
          url: `/anime/${app?.id}/characters`,
        })
        console.log('Data:', res)
        setData({
          ...data,
          characters: res?.data,
        })
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
    }
    if (app?.id && !characters) {
      fetchData()
    }
  }, [app?.id, characters])

  return (
    <section id='characters' className='space-y-4'>
      <h3 className='my-10 text-lg font-semibold text-center'>Characters</h3>
      <div className='flex flex-wrap gap-4'>
        {characters?.map((item, i) => {
          return (
            <Link
              key={`character-${i}`}
              to={`/character/${item?.character?.mal_id}`}
              className={cn(
                'relative flex-grow flex flex-col gap-2 max-w-[calc(100%/2-1rem)]',
                'overflow-hidden transition-all duration-300 rounded-lg shadow hover:scale-105 hover:z-30 bg-white dark:bg-slate-700 group'
              )}
            >
              <img
                src={item?.character?.images?.webp?.image_url}
                alt={`image-${item?.character?.name}`}
                className='w-full h-full'
              />
              <span className='absolute bottom-0 left-0 right-0 p-2 text-lg font-normal text-center text-white transition-opacity duration-300 opacity-0 backdrop-blur-3xl group-hover:opacity-100'>
                {item?.character?.name.replace(', ', ' ')}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Characters
