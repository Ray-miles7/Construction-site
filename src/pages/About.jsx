import { motion } from "framer-motion";

// Dummy team data
const teamMembers = [
  {
    name: "Amina El-Khatib",
    role: "CEO & Founder",
    photo: "/images/avatar3.jpg",
  },
  {
    name: "Omar Rahman",
    role: "Head of Architecture",
    photo: "/images/avatar1.jpg",
  },
  {
    name: "Lina Farouk",
    role: "Project Manager",
    photo: "/images/avatar1.jpg",
  },
  {
    name: "Jamal Saeed",
    role: "Lead Engineer",
    photo: "/images/avatar3.jpg",
  },
];

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[60vh] bg-[url('/images/hero2.jpg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building the Future</h1>
          <p className="text-lg md:text-xl">
            Excellence in construction, innovation in design, integrity in delivery.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Founded in the heart of Dubai, our company has been redefining skylines and shaping communities for over a decade. With a strong focus on quality, sustainability, and modern architectural practices, we’ve completed dozens of landmark projects across the region.
          </motion.p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Our Mission",
              text: "To deliver high-quality, sustainable, and innovative construction solutions that exceed client expectations.",
            },
            {
              title: "Our Vision",
              text: "To be the leading construction firm in the Middle East, admired for our people, partnerships, and performance.",
            },
            {
              title: "Our Values",
              text: "Integrity, excellence, innovation, and a commitment to safety and community development.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Over 15 years of experience in the region",
              "Award-winning architecture and design",
              "Client-first approach to every project",
              "Strict quality control and safety compliance",
              "Skilled workforce and leading-edge tools",
              "Commitment to sustainability and green building",
            ].map((reason, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-lg p-5 border hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-gray-700 font-medium">✔ {reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <img src={member.photo} alt={member.name} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-700">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to build with us?</h3>
          <p className="mb-6">Explore our projects or reach out to start your next construction journey.</p>
          <a
            href="/contact"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
