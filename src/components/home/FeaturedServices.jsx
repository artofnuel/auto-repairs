import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTools, FaCar, FaTachometerAlt, FaSprayCan } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'

const services = [
  {
    id: 1,
    title: 'Engine Repair & Rebuild',
    description: 'Complete engine diagnostics, repair and rebuild services to keep your vehicle running at peak performance.',
    icon: <FaTools className="text-4xl text-primary-500" />,
    link: '/services',
  },
  {
    id: 2,
    title: 'Custom Restoration',
    description: 'Expert restoration services for classic and vintage vehicles, bringing them back to their original glory or creating custom masterpieces.',
    icon: <FaCar className="text-4xl text-primary-500" />,
    link: '/services',
  },
  {
    id: 3,
    title: 'Performance Upgrades',
    description: 'Enhance your vehicle\'s performance with our professional upgrade services, from turbocharging to suspension improvements.',
    icon: <FaTachometerAlt className="text-4xl text-primary-500" />,
    link: '/services',
  },
  {
    id: 4,
    title: 'Premium Detailing',
    description: 'Complete interior and exterior detailing services using premium products for a showroom-quality finish.',
    icon: <FaSprayCan className="text-4xl text-primary-500" />,
    link: '/services',
  }
]

const FeaturedServices = () => {
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
    <section className="py-20 bg-light-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="Exceptional automotive care with a commitment to quality and precision"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="card service-card p-8 flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-dark-600 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-primary-500 font-medium hover:text-primary-700 inline-flex items-center transition-colors"
              >
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-dark">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices