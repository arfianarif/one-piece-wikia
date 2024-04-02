import { cn } from '@/lib/utils'

const Footer = ({ className }) => {
  return (
    <footer
      className={cn(
        'container mt-auto w-full flex flex-col gap-4 justify-between items-center py-4',
        className
      )}
    >
      <p className='text-xs'>This website was made by Arfian Arif in 2024.</p>
      <p className='text-xs'>Website made with Vite + React + Zustand </p>
      <p className='text-xs'>This project uses Jinkan FREE API</p>
      <p className='text-xs'>Still on progress</p>
    </footer>
  )
}

export default Footer
