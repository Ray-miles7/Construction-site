// src/components/AboutUs.jsx
import { motion } from "framer-motion";
import { Users, Building2, Handshake } from "lucide-react";

function AboutUs() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/team-illustration.jpg"
            alt="About Us Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            SABC is more than just a construction firm — we're a team of passionate builders, engineers,
            and dreamers shaping the future skyline of Dubai. Our commitment to quality and client success
            has made us a trusted name in the industry.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Users className="text-blue-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800">Experienced Team</h4>
                <p className="text-sm text-gray-600">Over 15 years of construction excellence across the UAE.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Building2 className="text-blue-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800">Tailored Solutions</h4>
                <p className="text-sm text-gray-600">Custom approaches that fit each project’s unique demands.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Handshake className="text-blue-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800">Client-First Approach</h4>
                <p className="text-sm text-gray-600">Transparency and trust are at the core of what we do.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
