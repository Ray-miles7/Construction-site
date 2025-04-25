import { Hammer, Clock, Users, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import ProjectsTeaser from "../components/ProjectsTeaser";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import StatsSection from "../components/StatsSection";


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-fixed bg-cover bg-center text-white py-36 px-4"
        style={{
          backgroundImage: "url('/images/hero1.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black bg-opacity-60 py-20 px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Building Tomorrow’s Landmarks Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Trusted by clients across Dubai for high-quality, timely construction.
          </motion.p>
          <motion.a
            href="/projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
          >
            View Our Projects
          </motion.a>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-100 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At SABC, we pride ourselves on delivering exceptional quality, every time.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[ // mapped to reuse motion.div
              { icon: <Hammer />, title: "Quality Work", text: "We maintain the highest standards of craftsmanship." },
              { icon: <Clock />, title: "On-Time Delivery", text: "Timely execution is at the core of our operations." },
              { icon: <Users />, title: "Expert Team", text: "Experienced engineers and architects at your service." },
              { icon: <MapPin />, title: "Dubai-Based", text: "Deep understanding of the UAE construction landscape." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow p-6"
              >
                <div className="text-blue-700 w-10 h-10 mb-4 mx-auto">{item.icon}</div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}

      <section className="py-20 bg-white px-4">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      What We Offer
    </motion.h2>

    <motion.p 
      className="text-gray-600 mb-12 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      High-end construction services delivered with excellence and precision.
    </motion.p>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "General Contracting",
          desc: "Full-scale construction solutions from start to finish.",
          img: "/illustrations/contracting.svg"
        },
        {
          title: "Design & Build",
          desc: "Creative architectural design meets expert execution.",
          img: "/illustrations/design.svg"
        },
        {
          title: "Renovation",
          desc: "Transforming outdated spaces into modern marvels.",
          img: "/illustrations/renovation.svg"
        }
      ].map((item, index) => (
        <motion.div
          key={item.title}
          className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={item.img} alt={item.title} className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div 
      className="mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <a
        href="/services"
        className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition"
      >
        Explore Our Full Services
      </a>
    </motion.div>
  </div>
      </section>

      {/* About Us Section */}
      <AboutUs />


      {/* Projects Teaser Section */}
      <ProjectsTeaser />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <ContactCTA />

    </div>
  )
}

export default Home
