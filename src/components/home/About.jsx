import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTools, FaUsers, FaCar, FaAward } from 'react-icons/fa'

const About = () => {
  const stats = [
    { id: 1, value: '15+', label: 'Years Experience', icon: <FaTools /> },
    { id: 2, value: '1,200+', label: 'Happy Clients', icon: <FaUsers /> },
    { id: 3, value: '2,500+', label: 'Projects Completed', icon: <FaCar /> },
    { id: 4, value: '12', label: 'Industry Awards', icon: <FaAward /> },
  ]
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Mechanic working on car" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Premium Auto Repair & Restoration Services
            </h2>
            
            <div className="w-20 h-1 bg-primary-500 mb-8" />
            
            <p className="text-dark-600 text-lg mb-6">
              Since 2010, we've been providing exceptional auto repair and restoration services with a focus on quality, precision, and customer satisfaction. Our team of skilled technicians brings decades of combined experience to every project.
            </p>
            
            <p className="text-dark-600 mb-8">
              Whether you're looking to restore a classic car to its former glory, enhance your vehicle's performance, or simply need regular maintenance, our team is equipped with the knowledge, tools, and passion to exceed your expectations.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-primary-500 text-2xl mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-dark-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn btn-dark">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About