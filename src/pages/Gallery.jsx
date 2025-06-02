import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/common/PageTransition";
import SectionHeading from "../components/common/SectionHeading";
import { useStore } from "../store";

const Gallery = () => {
  const portfolioItems = useStore((state) => state.portfolioItems);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState(null);

  // Get unique categories
  const categories = [
    "all",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory, portfolioItems]);

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
              "url(https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="absolute inset-0 bg-dark-900 bg-opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <div className="w-20 h-1 bg-primary-500 mb-8" />
            <p className="text-xl text-light-200">
              Explore our portfolio of completed projects, from classic
              restorations to modern performance upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-light-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Project Gallery"
            subtitle="Browse our collection of automotive projects"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-white text-dark-900 hover:bg-dark-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="portfolio-item h-72 sm:h-80 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                  variants={itemVariants}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="portfolio-overlay">
                    <div className="text-center p-6">
                      <h3 className="text-light-300 text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-light-300 mb-4 capitalize">
                        {item.category}
                      </p>
                      <button className="inline-block px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors rounded-md">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-dark-900 bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedItem.title}
                </h3>
                <p className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full mb-6 capitalize">
                  {selectedItem.category}
                </p>
                <p className="text-dark-600 mb-6">{selectedItem.description}</p>
                <div className="border-t border-light-400 pt-6">
                  <h4 className="font-bold mb-2">Project Details:</h4>
                  <ul className="list-disc list-inside text-dark-600 space-y-1">
                    <li>Complete diagnosis and assessment</li>
                    <li>Quality parts and materials</li>
                    <li>Expert technician service</li>
                    <li>Thorough quality control</li>
                    <li>Client satisfaction guarantee</li>
                  </ul>
                </div>
                <button
                  className="mt-8 inline-block px-6 py-3 bg-dark-900 text-white rounded-md hover:bg-dark-800 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
