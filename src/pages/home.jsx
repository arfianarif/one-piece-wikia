import Characters from '@/components/characters'
import Hero from '@/components/hero'
import AppLayout from '@/components/layouts/app'
import React from 'react'

const Homepage = () => {
  return (
    <AppLayout>
      <Hero />
      <Characters />
    </AppLayout>
  )
}

export default Homepage
