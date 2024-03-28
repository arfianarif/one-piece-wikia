import { cn } from '@/lib/utils'

const Footer = ({ className }) => {
  return (
    <footer
      className={cn(
        'container mt-auto w-full flex flex-row gap-4 justify-between items-center py-4',
        className
      )}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed
      quaerat a nihil labore velit at distinctio dicta ea nisi, incidunt error,
      voluptas, pariatur autem doloremque tempora dolorum placeat qui?
    </footer>
  )
}

export default Footer
