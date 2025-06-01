import { Link } from 'react-router-dom'
import PageTransition from '../components/common/PageTransition'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex items-center justify-center bg-light-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-dark-600 max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-dark">
              Return to Homepage
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default NotFound