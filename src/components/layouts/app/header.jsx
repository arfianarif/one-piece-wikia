import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const Header = ({ className }) => {
  return (
    <header
      className={cn(
        'w-full h-14 sticky top-0 bg-white z-20 flex flex-row items-center justify-between gap-4',
        className
      )}
    >
      <div className='container flex flex-row items-center justify-between h-full gap-4 mx-auto container-xl'>
        <Link to={'/'} className='text-lg font-semibold hover:cursor-pointer'>
          One Piece Wikia
        </Link>
        <div>Nav</div>
      </div>
    </header>
  )
}

export default Header
