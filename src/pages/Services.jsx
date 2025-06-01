import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaCar,
  FaTachometerAlt,
  FaSprayCan,
  FaBolt,
  FaWrench,
} from "react-icons/fa";
import PageTransition from "../components/common/PageTransition";
import SectionHeading from "../components/common/SectionHeading";
import { useStore } from "../store";

const servicesIcons = {
  engine: <FaTools className="text-4xl text-primary-500" />,
  car: <FaCar className="text-4xl text-primary-500" />,
  gauge: <FaTachometerAlt className="text-4xl text-primary-500" />,
  "car-wash": <FaSprayCan className="text-4xl text-primary-500" />,
  bolt: <FaBolt className="text-4xl text-primary-500" />,
  tools: <FaWrench className="text-4xl text-primary-500" />,
};

const Services = () => {
  const services = useStore((state) => state.services);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-dark-900 py-32 h-[65vh] flex flex-col justify-center items-start text-white relative">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3807327/pexels-photo-3807327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="absolute inset-0 bg-dark-900 bg-opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-primary-500 mb-8" />
            <p className="text-xl text-light-200">
              We offer a comprehensive range of automotive services to meet all
              your vehicle needs, from routine maintenance to complete
              restorations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Comprehensive Services"
            subtitle="We provide a wide range of automotive services to keep your vehicle in optimal condition"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="card service-card p-8 cursor-pointer h-full"
                variants={itemVariants}
                onClick={() => toggleExpand(service.id)}
              >
                <div className="mb-4">{servicesIcons[service.icon]}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-dark-600">{service.description}</p>
                {expandedId === service.id && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-light-400"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <h4 className="font-semibold mb-2">Service Includes:</h4>
                    <ul className="list-disc list-inside text-dark-600 space-y-1">
                      <li>Thorough inspection and diagnostics</li>
                      <li>Expert technician service</li>
                      <li>Quality parts and materials</li>
                      <li>Comprehensive warranty</li>
                      <li>Follow-up service check</li>
                    </ul>
                  </motion.div>
                )}
                <div className="mt-4 text-primary-500 font-medium">
                  {expandedId === service.id
                    ? "Click to collapse"
                    : "Click to learn more"}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Service Process"
            subtitle="How we approach every project with meticulous attention to detail"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-500 transform md:translate-x-[-50%]"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    id: 1,
                    title: "Initial Consultation",
                    description:
                      "We start with a detailed discussion about your vehicle, your goals, and your budget to create a customized plan.",
                  },
                  {
                    id: 2,
                    title: "Inspection & Diagnostics",
                    description:
                      "Our technicians perform a comprehensive inspection and diagnostics to identify all issues and opportunities for improvement.",
                  },
                  {
                    id: 3,
                    title: "Detailed Proposal",
                    description:
                      "We provide a detailed proposal including the scope of work, timeline, and transparent pricing.",
                  },
                  {
                    id: 4,
                    title: "Expert Service",
                    description:
                      "Our skilled technicians execute the plan with precision, using quality parts and materials.",
                  },
                  {
                    id: 5,
                    title: "Quality Assurance",
                    description:
                      "We conduct thorough quality checks to ensure all work meets our high standards.",
                  },
                  {
                    id: 6,
                    title: "Delivery & Follow-up",
                    description:
                      "We deliver your vehicle and provide a follow-up service to ensure your complete satisfaction.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`relative flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 border-4 border-white p-2 size-32 bg-primary-500 rounded-full flex items-center justify-center transform translate-x-[-50%] text-white font-bold">
                      {step.id}
                    </div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-[calc(50%-2rem)] ${
                        index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                      } ml-12 md:ml-0`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-dark-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-light-300 mb-8">
              Contact us today for a consultation and let us help you with your
              automotive needs.
            </p>
            <a href="/contact" className="btn btn-primary inline-block">
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
