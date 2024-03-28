import useTheme from '@/store/useTheme'
import { cn } from '@/lib/utils'
import { Switch } from '@headlessui/react'
import { IconMoon, IconSunHigh } from '@tabler/icons-react'

export const ThemeSwitcher = () => {
  const { isDark, setIsDark } = useTheme()
  return (
    <Switch
      checked={isDark}
      onChange={() => setIsDark(!isDark)}
      className={cn(
        // 'h-7 w-14',
        `hover:text-sky-500 hover:border-sky-500  dark:bg-opacity-20 bg-transparent relative inline-flex  items-center rounded-full bg-clip-padding`
      )}
      style={{
        backdropFilter: blur('20px'),
      }}
    >
      <span
        className={cn(
          'transform',
          `w-5 h-5 transition duration-300 rounded-full flex flex-row items-center justify-center`
          // isDark ? 'translate-x-5' : 'translate-x-1'
        )}
      >
        <IconSunHigh
          className={cn(
            'transition duration-150 ease-in',
            isDark ? 'hidden' : 'block'
          )}
        />
        <IconMoon
          className={cn(
            'transition duration-300 ease-in',
            isDark ? 'block' : 'hidden'
          )}
        />
      </span>
    </Switch>
  )
}
