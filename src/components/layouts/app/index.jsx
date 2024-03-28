import Footer from './footer'
import Header from './header'

const AppLayout = ({ children }) => {
  return (
    <div className='relative flex flex-col min-h-screen gap-4 antialiased'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
