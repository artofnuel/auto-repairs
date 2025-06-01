import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { useStore } from '../../store'
import SectionHeading from '../common/SectionHeading'

const Testimonials = () => {
  const testimonials = useStore((state) => state.testimonials)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
      setDirection(1)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setDirection(-1)
  }
  
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setDirection(1)
  }
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  }
  
  return (
    <section className="py-20 bg-light-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What our clients say about our services"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="py-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <FaQuoteLeft className="text-4xl text-primary-500 opacity-20 absolute top-6 left-6" />
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary-500">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-dark-600 mb-6 relative z-10 px-8">
                    "{testimonials[current].text}"
                  </p>
                  <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                  <p className="text-dark-500">{testimonials[current].position}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark-900 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-900 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-primary-500' : 'bg-dark-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials