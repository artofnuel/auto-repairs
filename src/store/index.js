import { create } from 'zustand'

export const useStore = create((set) => ({
  // Navigation state
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  
  // Gallery filter state
  selectedCategory: 'all',
  setCategory: (category) => set({ selectedCategory: category }),
  
  // Form state
  formData: {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  },
  updateFormField: (field, value) => 
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value
      }
    })),
  resetForm: () => 
    set({
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      }
    }),
    
  // Testimonials state
  testimonials: [
    {
      id: 1,
      name: 'John Smith',
      position: 'Business Owner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'The team at AutoRepair transformed my vintage Mustang. Their attention to detail and craftsmanship is unmatched in the industry.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'I\'ve been bringing my vehicles here for years. The service is always exceptional, and they take the time to explain everything.',
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      position: 'Car Enthusiast',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'From basic maintenance to complete restorations, these are the only mechanics I trust with my collection of classic cars.',
    },
  ],
  
  // Portfolio items state
  portfolioItems: [
    {
      id: 1,
      title: 'Classic Mustang Restoration',
      category: 'restoration',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Complete restoration of a 1967 Ford Mustang, including engine rebuild, body work, and custom paint job.'
    },
    {
      id: 2,
      title: 'Luxury SUV Service',
      category: 'maintenance',
      image: 'https://images.pexels.com/photos/5090639/pexels-photo-5090639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Comprehensive service package for high-end SUVs including computerized diagnostics and performance tuning.'
    },
    {
      id: 3,
      title: 'Vintage Truck Customization',
      category: 'custom',
      image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Custom modifications to a classic pickup truck including modernized suspension and custom interior.'
    },
    {
      id: 4,
      title: 'Performance Car Tuning',
      category: 'performance',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Engine and ECU tuning to maximize performance on a modern sports car.'
    },
    {
      id: 5,
      title: 'Complete Brake System Overhaul',
      category: 'maintenance',
      image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Replacement of all brake components with high-performance alternatives for improved stopping power.'
    },
    {
      id: 6,
      title: 'Luxury Sedan Detailing',
      category: 'detailing',
      image: 'https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Premium detailing service including paint correction, ceramic coating, and interior restoration.'
    },
  ],
  
  // Services state
  services: [
    {
      id: 1,
      title: 'Engine Repair & Rebuild',
      icon: 'engine',
      description: 'Complete engine diagnostics, repair and rebuild services to keep your vehicle running at peak performance.',
    },
    {
      id: 2,
      title: 'Custom Restoration',
      icon: 'car',
      description: 'Expert restoration services for classic and vintage vehicles, bringing them back to their original glory or creating custom masterpieces.',
    },
    {
      id: 3,
      title: 'Performance Upgrades',
      icon: 'gauge',
      description: 'Enhance your vehicle\'s performance with our professional upgrade services, from turbocharging to suspension improvements.',
    },
    {
      id: 4,
      title: 'Premium Detailing',
      icon: 'car-wash',
      description: 'Complete interior and exterior detailing services using premium products for a showroom-quality finish.',
    },
    {
      id: 5,
      title: 'Electrical Systems',
      icon: 'bolt',
      description: 'Comprehensive electrical system diagnosis and repair, including computer systems and modern vehicle electronics.',
    },
    {
      id: 6,
      title: 'Maintenance Services',
      icon: 'tools',
      description: 'Regular maintenance services to keep your vehicle in optimal condition, from oil changes to comprehensive inspections.',
    },
  ],
  
  // Team members state
  teamMembers: [
    {
      id: 1,
      name: 'Robert Chen',
      position: 'Master Technician & Founder',
      image: 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'With over 20 years of experience, Robert founded AutoRepair with a vision to combine traditional craftsmanship with modern technology.',
    },
    {
      id: 2,
      name: 'Jessica Miller',
      position: 'Performance Specialist',
      image: 'https://images.pexels.com/photos/5325599/pexels-photo-5325599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Jessica specializes in performance tuning and engine modifications, with expertise in both domestic and imported sports cars.',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      position: 'Restoration Expert',
      image: 'https://images.pexels.com/photos/8993547/pexels-photo-8993547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Marcus brings 15 years of restoration experience, having worked on everything from rare classics to vintage muscle cars.',
    },
    {
      id: 4,
      name: 'Sophia Rodriguez',
      position: 'Electrical Systems Specialist',
      image: 'https://images.pexels.com/photos/6954204/pexels-photo-6954204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Sophia is our expert in modern vehicle electronics and diagnostic systems, keeping us at the cutting edge of automotive technology.',
    },
  ],
}))