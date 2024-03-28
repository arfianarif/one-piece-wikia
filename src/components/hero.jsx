import OnePieceHero from '@/assets/images/one-piece-hero.jpg'
import { cn } from '@/lib/utils'

const Hero = ({ className }) => {
  return (
    <section
      id='hero'
      className={cn(
        'w-full h-full flex flex-col gap-4 justify-start items-center relative bg-cover bg-center bg-no-repeat aspect-video text-white rounded-lg',
        className
      )}
      style={{
        backgroundImage: `url(${OnePieceHero})`,
      }}
    ></section>
  )
}

export default Hero
