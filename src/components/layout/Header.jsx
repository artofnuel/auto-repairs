import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useStore } from '../../store'
import Logo from '../common/Logo'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMenuOpen, toggleMenu, closeMenu } = useStore()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-dark-900 shadow-lg' : 'bg-transparent'
  }`
  
  const navLinkClasses = ({ isActive }) => 
    `relative px-3 py-2 text-lg font-medium transition-colors ${
      isActive 
        ? 'text-primary-500' 
        : isScrolled 
          ? 'text-white hover:text-primary-400' 
          : 'text-white hover:text-primary-400'
    }`
  
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      }
    }
  }
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50" onClick={closeMenu}>
            <Logo scrolled={isScrolled} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClasses}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={navLinkClasses}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
            <Link 
              to="/contact" 
              className="btn btn-primary ml-4"
            >
              Get a Quote
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="z-50 md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-dark-900 z-40 md:hidden flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              <NavLink 
                to="/" 
                className={navLinkClasses}
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                className={navLinkClasses}
                onClick={closeMenu}
              >
                Services
              </NavLink>
              <NavLink 
                to="/gallery" 
                className={navLinkClasses}
                onClick={closeMenu}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/about" 
                className={navLinkClasses}
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={navLinkClasses}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <Link 
                to="/contact" 
                className="btn btn-primary mt-4"
                onClick={closeMenu}
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header