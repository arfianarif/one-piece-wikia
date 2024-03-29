import AppLayout from '@/components/layouts/app'
import { cn } from '@/lib/utils'
import jikanServices from '@/services/jikan'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const CharacterPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await jikanServices.getData({
          url: `/characters/${id}/full`,
        })
        console.log(res)
        setData(res?.data)
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
    }
    if (id && !data) {
      fetchData()
    }
  }, [id])

  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    })
  }, [ref])

  return (
    <AppLayout>
      <div className='flex flex-col gap-4'>
        <div ref={ref} className='flex flex-col gap-4 md:flex-row '>
          <div
            className={cn(
              'relative flex-grow flex flex-col gap-2 w-full items-center justify-center md:max-w-[calc(50%/2-1rem)] h-fit',
              'overflow-hidden transition-all duration-300 rounded-lg shadow hover:scale-105 hover:z-10 bg-white dark:bg-slate-700 group',
              'hover:cursor-pointer'
            )}
            onClick={() => {
              window.open(data?.url, '_blank', 'noopener')
            }}
          >
            <img
              src={data?.images?.webp?.image_url}
              alt={`image-${data?.name}`}
              className='object-contain w-full h-full'
            />
            <span className='absolute bottom-0 left-0 right-0 p-2 text-lg font-normal text-center transition-opacity opacity-0 backdrop-blur-3xl bg-slate-50 dark:bg-slate-800 group-hover:opacity-100'>
              More
            </span>
          </div>
          <div className='flex-1 space-y-4'>
            <h3 className='text-lg font-semibold'>
              {data?.name} - {data?.name_kanji}
            </h3>
            <span className='text-base font-medium'>
              {data?.nicknames?.join(', ')}
            </span>
            <div className='space-y-2'>
              {data?.about?.split('\n').map((str, i) => (
                <p key={i} className='text-xs'>
                  {str}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='my-6 text-lg font-semibold'>Anime</h3>
          <div className='flex flex-col gap-4 '>
            {data?.anime?.map((item, i) => {
              return (
                <div key={`debut-anime-${i}`} className='flex gap-2 '>
                  <div
                    className={cn(
                      'relative flex-grow flex flex-col gap-2 max-w-[calc(50%/2-1rem)] items-center justify-center h-fit',
                      'overflow-hidden transition-all duration-300 rounded-lg shadow hover:scale-105 hover:z-10 bg-white dark:bg-slate-700 group',
                      'hover:cursor-pointer'
                    )}
                    onClick={() => {
                      window.open(item?.anime?.url, '_blank', 'noopener')
                    }}
                  >
                    <img
                      src={item?.anime?.images?.webp?.image_url}
                      alt={`image-${item?.anime?.title}`}
                      className='object-cover w-full h-full '
                    />
                    <span className='absolute bottom-0 left-0 right-0 p-2 text-xs font-normal text-center transition-opacity opacity-0 backdrop-blur-3xl bg-slate-50 dark:bg-slate-800 group-hover:opacity-100'>
                      More
                    </span>
                  </div>
                  <h3 className='text-sm md:text-base'>{item?.anime?.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='my-6 text-lg font-semibold'>Manga</h3>
          <div className='flex flex-col gap-4 '>
            {data?.manga?.map((item, i) => {
              return (
                <div key={`debut-manga-${i}`} className='flex gap-2'>
                  <div
                    className={cn(
                      'relative flex-grow flex flex-col gap-2 max-w-[calc(50%/2-1rem)] items-center justify-center h-fit',
                      'overflow-hidden transition-all duration-300 rounded-lg shadow hover:scale-105 hover:z-10 bg-white dark:bg-slate-700 group',
                      'hover:cursor-pointer'
                    )}
                    onClick={() => {
                      window.open(item?.manga?.url, '_blank', 'noopener')
                    }}
                  >
                    <img
                      src={item?.manga?.images?.webp?.image_url}
                      alt={`image-${item?.manga?.title}`}
                      className='object-cover w-full h-full '
                    />
                    <span className='absolute bottom-0 left-0 right-0 p-2 text-xs font-normal text-center transition-opacity opacity-0 backdrop-blur-3xl bg-slate-50 dark:bg-slate-800 group-hover:opacity-100'>
                      More
                    </span>
                  </div>
                  <h3 className='text-sm md:text-base'>{item?.manga?.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default CharacterPage
