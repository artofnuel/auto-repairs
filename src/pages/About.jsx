import { motion } from "framer-motion";
import PageTransition from "../components/common/PageTransition";
import SectionHeading from "../components/common/SectionHeading";
import { useStore } from "../store";
import { FaTools, FaUsers, FaCar, FaAward } from "react-icons/fa";

const About = () => {
  const teamMembers = useStore((state) => state.teamMembers);

  const stats = [
    {
      id: 1,
      value: "15+",
      label: "Years Experience",
      icon: <FaTools className="text-3xl" />,
    },
    {
      id: 2,
      value: "1,200+",
      label: "Happy Clients",
      icon: <FaUsers className="text-3xl" />,
    },
    {
      id: 3,
      value: "2,500+",
      label: "Projects Completed",
      icon: <FaCar className="text-3xl" />,
    },
    {
      id: 4,
      value: "12",
      label: "Industry Awards",
      icon: <FaAward className="text-3xl" />,
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-dark-900 py-32 h-[65vh] flex flex-col justify-center items-start text-white relative">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3807322/pexels-photo-3807322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="absolute inset-0 bg-dark-900 bg-opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <div className="w-20 h-1 bg-primary-500 mb-8" />
            <p className="text-xl text-light-200">
              Learn about our history, our team, and our commitment to
              automotive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary-500 mb-8" />
              <p className="text-dark-600 mb-6">
                Founded in 2010 by Robert Chen, a master technician with over 20
                years of experience, AutoRepair was built on a vision to combine
                traditional craftsmanship with modern technology. What began as
                a small garage with just two technicians has grown into a
                premier automotive service center.
              </p>
              <p className="text-dark-600 mb-6">
                Our journey has been driven by a passion for vehicles and a
                commitment to quality. We've assembled a team of specialists who
                share our dedication to excellence, allowing us to expand our
                services from basic repairs to comprehensive restorations and
                performance upgrades.
              </p>
              <p className="text-dark-600">
                Today, we're proud to be trusted by vehicle owners across the
                region, from classic car enthusiasts to modern performance
                vehicle drivers. Our reputation has been built on consistent
                quality, attention to detail, and exceptional customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Auto repair shop"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center p-8 border border-dark-700 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-light-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The skilled professionals behind our exceptional work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-500 mb-4">{member.position}</p>
                <p className="text-dark-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work and our relationships"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Quality",
                description:
                  "We never compromise on the quality of our work. From the parts we use to the techniques we employ, excellence is our standard.",
              },
              {
                id: 2,
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty. Our customers trust us because we earn that trust through our actions.",
              },
              {
                id: 3,
                title: "Innovation",
                description:
                  "We continuously invest in the latest tools, technologies, and training to provide cutting-edge solutions for modern vehicles.",
              },
              {
                id: 4,
                title: "Craftsmanship",
                description:
                  "We believe in the value of skilled workmanship and attention to detail, which is evident in every project we complete.",
              },
              {
                id: 5,
                title: "Customer Focus",
                description:
                  "We prioritize customer satisfaction and build lasting relationships through exceptional service and communication.",
              },
              {
                id: 6,
                title: "Passion",
                description:
                  "We are passionate about vehicles and take pride in transforming and maintaining them to the highest standards.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.id}
                className="p-6 border-l-4 border-primary-500 bg-light-50 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-dark-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
