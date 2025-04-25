// src/components/ProjectTestimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amina Rahman",
    role: "Senior Architect, UrbanNest",
    quote:
      "The team was brilliant from planning to execution. Truly one of the best collaborations we've had.",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Liam Carter",
    role: "Real Estate Developer, Vision Group",
    quote:
      "Delivery was flawless, and the attention to detail made a huge difference. Will work with them again.",
    avatar: "/images/avatar2.jpg",
  },
];

function ProjectTestimonials() {
  return (
    <section className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-blue-800 mb-8">Client Feedback</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow p-6 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-blue-800">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
              <p className="text-gray-700 italic">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectTestimonials;
