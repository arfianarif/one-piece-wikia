import useTheme from '@/store/useTheme'
import { memo, useEffect } from 'react'
import Footer from './footer'
import Header from './header'
import { useAppContext } from '@/hooks/useAppContext'

const AppLayout = ({ children }) => {
  const { isLoading, error } = useAppContext()
  const { isDark } = useTheme()

  useEffect(() => {
    if (isDark) {
      return document.documentElement.classList.add('dark')
    }
    return document.documentElement.classList.remove('dark')
  }, [isDark])

  return (
    <div className='relative flex flex-col min-h-screen gap-4 antialiased text-gray-700 transition-colors duration-150 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'>
      <Header />
      <div id='content' className='container flex flex-col min-h-screen gap-4'>
        {isLoading ? 'Loading,..' : error ? error : children}
      </div>
      <Footer />
    </div>
  )
}

export default memo(AppLayout)
