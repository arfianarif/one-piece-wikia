import { cn } from '@/lib/utils'
import useJikan from '@/store/useJikan'
import React, { useEffect } from 'react'

const Pictures = () => {
  const { pictures, fetchPictures } = useJikan()

  useEffect(() => {
    !pictures?.data?.length && fetchPictures()
  }, [pictures?.data?.length])

  useEffect(() => {
    console.log({ pictures })
  }, [pictures])

  return (
    <section id='pictures' className='space-y-4'>
      <h3 className='my-10 text-lg font-semibold text-center'>Pictures</h3>

      <div className='flex flex-wrap justify-center gap-4'>
        {pictures?.data?.map((item, i) => {
          return (
            <div
              key={`pictures-${i}`}
              className={cn(
                'relative flex-grow flex flex-col gap-2 max-w-[calc(100%/2-12px)]',
                'overflow-hidden transition-all duration-300 rounded-lg shadow hover:scale-105 hover:z-10 bg-white dark:bg-slate-700 group'
              )}
            >
              <img
                src={item?.webp?.image_url}
                alt={`image-${item?.name}`}
                className='w-full h-full'
              />
              <span className='absolute bottom-0 left-0 right-0 p-2 text-xs font-normal text-center transition-opacity opacity-0 backdrop-blur-3xl bg-slate-50 dark:bg-slate-800 group-hover:opacity-100'>
                {item?.character?.name.replace(', ', ' ')}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pictures
