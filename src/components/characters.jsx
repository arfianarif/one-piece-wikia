import { cn } from '@/lib/utils'
import useJikan from '@/store/useJikan'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [visibleCharacter, setVisibleCharacter] = useState(1000)
  const { characters, fetchCharacters } = useJikan()
  const max = characters?.data?.length
  const characterToshow = characters?.data?.slice(0, visibleCharacter)
  const handleShowMore = () => {
    if (visibleCharacter <= max) {
      setVisibleCharacter((prev) => prev + 18)
    }
  }

  useEffect(() => {
    !characters?.data && fetchCharacters()
  }, [characters?.data])

  return (
    <section id='characters' className='space-y-4'>
      <h3 className='my-10 text-lg font-semibold text-center'>Characters</h3>
      {characters?.isLoading && 'Loading,..'}
      <div className='flex flex-wrap justify-center gap-4'>
        {characterToshow?.map((item, i) => {
          return (
            <Link
              key={`character-${i}`}
              to={`/character/${item?.character?.mal_id}`}
              className={cn(
                'relative flex-grow flex flex-col gap-2 max-w-[calc(100%/2-12px)]',
                'overflow-hidden transition-all duration-300 rounded-lg shadow hover:scale-105 hover:z-10 bg-white dark:bg-slate-700 group'
              )}
            >
              <img
                src={item?.character?.images?.webp?.image_url}
                alt={`image-${item?.character?.name}`}
                className='w-full h-full'
              />
              <span className='absolute bottom-0 left-0 right-0 p-2 text-xs font-normal text-center transition-opacity opacity-0 backdrop-blur-3xl bg-slate-50 dark:bg-slate-800 group-hover:opacity-100'>
                {item?.character?.name.replace(', ', ' ')}
              </span>
            </Link>
          )
        })}
      </div>
      <button onClick={handleShowMore}>Muat lebih banyak</button>
    </section>
  )
}

export default Characters
