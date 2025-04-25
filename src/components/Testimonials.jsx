// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // using lucide-react icons

const testimonials = [
  {
    name: "Fatima Al Zahra",
    role: "Project Manager, Al Noor Group",
    quote: "SABC delivered beyond expectations—on time, on budget, and with incredible quality.",
    avatar: "/images/avatar1.jpg",
    rating: 5,
  },
  {
    name: "James Peterson",
    role: "Director, Skyline Ventures",
    quote: "We’ve worked with many firms, but SABC’s professionalism stands unmatched.",
    avatar: "/images/avatar2.jpg",
    rating: 4,
  },
  {
    name: "Sara Khan",
    role: "CEO, UrbanNest",
    quote: "Their attention to detail and commitment to excellence is why we keep coming back.",
    avatar: "/images/avatar3.jpg",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from those who trust us with their vision.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
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

              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`mr-1 ${index < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill={index < item.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
