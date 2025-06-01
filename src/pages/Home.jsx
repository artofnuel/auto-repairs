import PageTransition from '../components/common/PageTransition'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import About from '../components/home/About'
import FeaturedWorks from '../components/home/FeaturedWorks'
import Testimonials from '../components/home/Testimonials'
import ContactCTA from '../components/home/ContactCTA'

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <FeaturedServices />
      <About />
      <FeaturedWorks />
      <Testimonials />
      <ContactCTA />
    </PageTransition>
  )
}

export default Home