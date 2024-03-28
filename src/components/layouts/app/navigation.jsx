import { APP_NAVIGATIONS } from '@/config/app'
import { cn } from '@/lib/utils'
import { Menu, Transition } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Navigation = ({ className }) => {
  return (
    <nav
      className={cn(
        'relative flex flex-row justify-start items-center gap-4',
        className
      )}
    >
      {APP_NAVIGATIONS?.map((nav) => {
        const { id, slug, label, children } = nav
        const hasChild = children?.length > 0
        if (hasChild) {
          return (
            <Menu key={id} as='div' className='relative inline-block text-left'>
              <Menu.Button className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold capitalize hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-50'>
                {({ open }) => {
                  return (
                    <Fragment>
                      {label}
                      <IconChevronDown
                        className={cn(
                          'w-5 h-5 transition-all duration-300',
                          open ? 'rotate-180' : ''
                        )}
                        aria-hidden='true'
                      />
                    </Fragment>
                  )
                }}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-20 w-40 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none'>
                  {children?.map((child) => {
                    return (
                      <Menu.Item key={child.id}>
                        {({ active }) => (
                          <Link
                            to={child.slug}
                            className={cn(
                              'flex w-full items-center rounded-md px-2 py-2 text-sm capitalize',
                              active ? '' : ''
                            )}
                          >
                            {child.label}
                          </Link>
                        )}
                      </Menu.Item>
                    )
                  })}
                </Menu.Items>
              </Transition>
            </Menu>
          )
        }
        return (
          <Menu key={id} as='div' className='relative inline-block text-left'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  key={id}
                  to={slug}
                  className={cn(
                    'flex w-full items-center rounded-md px-2 py-2 text-sm capitalize font-semibold',
                    active ? '' : ''
                  )}
                >
                  {label}
                </Link>
              )}
            </Menu.Item>
          </Menu>
        )
      })}
    </nav>
  )
}
