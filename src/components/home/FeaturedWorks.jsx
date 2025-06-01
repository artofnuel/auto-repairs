import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../../store'
import SectionHeading from '../common/SectionHeading'

const FeaturedWorks = () => {
  const portfolioItems = useStore((state) => state.portfolioItems)
  const featuredItems = portfolioItems.slice(0, 3)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <section className="py-20 bg-dark-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Works" 
          subtitle="Explore our portfolio of exceptional auto restoration and repair projects"
          light={true}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredItems.map((item) => (
            <motion.div 
              key={item.id}
              className="portfolio-item h-72 sm:h-80 md:h-96"
              variants={itemVariants}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-light-300 mb-4">{item.category}</p>
                  <Link 
                    to="/gallery" 
                    className="inline-block px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorks