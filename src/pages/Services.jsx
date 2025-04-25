// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Wrench, Building2, Sparkles, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-blue-700" />,
    title: "General Contracting",
    description:
      "We manage every phase of construction with strict quality control and on-time delivery.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-blue-700" />,
    title: "Design & Build",
    description:
      "From concept to completion, we handle both the creative and technical aspects.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-blue-700" />,
    title: "Project Management",
    description:
      "Efficient, streamlined, and transparent project supervision from start to finish.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-blue-700" />,
    title: "Renovation",
    description:
      "We bring new life to outdated spaces, maximizing value and aesthetic appeal.",
  },
];

function Services() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer a wide range of professional services tailored to meet the diverse needs of clients across Dubai and beyond.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
