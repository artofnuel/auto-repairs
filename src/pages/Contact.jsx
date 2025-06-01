import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import PageTransition from "../components/common/PageTransition";
import SectionHeading from "../components/common/SectionHeading";
import { useStore } from "../store";

const Contact = () => {
  const { formData, updateFormField, resetForm } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      resetForm();
    }, 1500);
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-dark-900 py-32 h-[65vh] flex flex-col justify-center items-start text-white relative">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="absolute inset-0 bg-dark-900 bg-opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-20 h-1 bg-primary-500 mb-8" />
            <p className="text-xl text-light-200">
              Get in touch with our team for inquiries, quotes, or to schedule a
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                id: 1,
                icon: <FaMapMarkerAlt className="text-4xl text-primary-500" />,
                title: "Our Location",
                content: "123 Auto Center Drive, Anytown, CA 90210",
              },
              {
                id: 2,
                icon: <FaPhone className="text-4xl text-primary-500" />,
                title: "Phone Number",
                content: "(555) 123-4567",
                link: "tel:+15551234567",
              },
              {
                id: 3,
                icon: <FaEnvelope className="text-4xl text-primary-500" />,
                title: "Email Address",
                content: "info@autorepair.com",
                link: "mailto:info@autorepair.com",
              },
              {
                id: 4,
                icon: <FaClock className="text-4xl text-primary-500" />,
                title: "Working Hours",
                content: "Mon-Fri: 8am-6pm, Sat: 9am-3pm",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                className="text-center p-6 border border-light-300 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-dark-600 hover:text-primary-500 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-dark-600">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="w-20 h-1 bg-primary-500 mb-8" />

              {isSubmitted ? (
                <motion.div
                  className="bg-green-50 border border-green-200 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you as soon
                    as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-dark-600 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          updateFormField("name", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-light-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-dark-600 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormField("email", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-light-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-dark-600 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormField("phone", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-light-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-dark-600 mb-2"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          updateFormField("service", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-light-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select a service</option>
                        <option value="Engine Repair">Engine Repair</option>
                        <option value="Custom Restoration">
                          Custom Restoration
                        </option>
                        <option value="Performance Upgrades">
                          Performance Upgrades
                        </option>
                        <option value="Premium Detailing">
                          Premium Detailing
                        </option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-dark-600 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={(e) =>
                        updateFormField("message", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-light-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={`btn btn-primary w-full flex justify-center items-center ${
                        isLoading ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\"
                            xmlns="http://www.w3.org/2000/svg\"
                            fill="none\"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25\"
                              cx="12\"
                              cy="12\"
                              r="10\"
                              stroke="currentColor\"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div className="w-20 h-1 bg-primary-500 mb-8" />

              <div className="bg-light-100 p-4 rounded-lg shadow-md h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-dark-600 mb-4">
                    Map placeholder - In a real implementation, this would be an
                    embedded Google Map or similar service.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
