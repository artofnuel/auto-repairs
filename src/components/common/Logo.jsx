import { Link } from 'react-router-dom'

const Logo = ({ scrolled }) => {
  return (
    <Link to="/" className="inline-block">
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold font-montserrat">
          <span className={scrolled ? 'text-white' : 'text-white'}>AUTO</span>
          <span className="text-primary-500">REPAIR</span>
        </span>
      </div>
    </Link>
  )
}

export default Logo