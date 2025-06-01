import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, centered = true, light = false }) => {
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
    hidden: { y: 20, opacity: 0 },
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
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-900'}`}
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg max-w-2xl mx-auto ${light ? 'text-light-300' : 'text-dark-500'}`}
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`w-20 h-1 bg-primary-500 mt-6 ${centered ? 'mx-auto' : ''}`}
        variants={itemVariants}
      />
    </motion.div>
  )
}

export default SectionHeading