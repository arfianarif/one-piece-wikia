import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { Navigation } from './navigation'
import { ThemeSwitcher } from './theme-switcher'

const Header = ({ className }) => {
  return (
    <header
      className={cn(
        'w-full h-14 sticky top-0 bg-transparent z-20 flex flex-row items-center justify-between gap-4',
        className
      )}
    >
      <div className='container flex flex-row items-center justify-between h-full gap-4 mx-auto backdrop-blur'>
        <Link to={'/'} className='text-lg font-semibold hover:cursor-pointer'>
          One Piece Wikia
        </Link>
        <div
          className={cn(
            'relative flex flex-row justify-start items-center gap-4'
          )}
        >
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
