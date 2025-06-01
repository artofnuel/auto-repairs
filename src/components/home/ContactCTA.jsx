import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContactCTA = () => {
  return (
    <section className="py-20 bg-dark-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover opacity-30"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-dark-900 bg-opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Vehicle?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-light-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're looking for routine maintenance, performance upgrades, or a complete restoration, our team is ready to exceed your expectations.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+15551234567" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 transition-colors">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA