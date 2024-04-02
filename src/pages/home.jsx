import Characters from '@/components/characters'
import Hero from '@/components/hero'
import AppLayout from '@/components/layouts/app'
import News from '@/components/news'
import Pictures from '@/components/pictures'
import React from 'react'

const Homepage = () => {
  return (
    <AppLayout>
      <Hero />
      {/* <Pictures /> */}
      {/* <News /> */}
      <Characters />
    </AppLayout>
  )
}

export default Homepage
