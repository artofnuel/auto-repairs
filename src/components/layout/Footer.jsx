import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from '../common/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <div className="mb-6">
              <Logo scrolled={true} />
            </div>
            <p className="text-light-700 mb-6">
              Premium auto repair and restoration services with a commitment to quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light-500 hover:text-primary-500 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light-500 hover:text-primary-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light-500 hover:text-primary-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light-500 hover:text-primary-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-light-500 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-500 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-light-500 hover:text-primary-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-500 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-500 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-light-500 hover:text-primary-500 transition-colors">
                  Engine Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-500 hover:text-primary-500 transition-colors">
                  Custom Restoration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-500 hover:text-primary-500 transition-colors">
                  Performance Upgrades
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-500 hover:text-primary-500 transition-colors">
                  Premium Detailing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-500 hover:text-primary-500 transition-colors">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3" />
                <span className="text-light-500">
                  123 Auto Center Drive<br />
                  Anytown, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-500 mr-3" />
                <a href="tel:+15551234567" className="text-light-500 hover:text-primary-500 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-500 mr-3" />
                <a href="mailto:info@autorepair.com" className="text-light-500 hover:text-primary-500 transition-colors">
                  info@autorepair.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-12 pt-8 text-center text-light-700">
          <p>© {currentYear} AutoRepair. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer