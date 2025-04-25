// src/components/ContactCTA.jsx
import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero1.jpg')",
        
       }
    }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Something Great Together
          </h2>
          <p className="mb-6 text-gray-200">
            Whether you have a question or you’re ready to start a project,
            we’re here to help. Reach out and we’ll respond promptly.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Right: Glassmorphism Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactCTA;
