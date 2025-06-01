import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useStore } from '../../store'

const Layout = ({ children }) => {
  const location = useLocation()
  const closeMenu = useStore((state) => state.closeMenu)
  
  useEffect(() => {
    closeMenu()
  }, [location, closeMenu])
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout