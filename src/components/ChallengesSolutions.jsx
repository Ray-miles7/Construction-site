// src/components/ChallengesSolutions.jsx
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Tight Urban Space",
    detail: "The site was located in a congested downtown area, limiting access for machinery and deliveries."
  },
  {
    title: "Weather Constraints",
    detail: "Frequent sandstorms delayed exterior work and material delivery."
  },
  {
    title: "Complex Permits",
    detail: "Obtaining permits for advanced tech systems and vertical design took longer than expected."
  },
];

const solutions = [
  {
    title: "Smart Logistics",
    detail: "Implemented off-site material staging and scheduled night deliveries."
  },
  {
    title: "Flexible Scheduling",
    detail: "Restructured the timeline to prioritize indoor work during poor weather conditions."
  },
  {
    title: "Proactive Coordination",
    detail: "Worked closely with local authorities to fast-track permit approvals through phased documentation."
  },
];

function ChallengesSolutions() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-blue-800 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Challenges & Solutions
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold text-red-600 mb-4">Challenges</h4>
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                className="mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <h5 className="font-bold text-gray-800">{item.title}</h5>
                <p className="text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-4">Solutions</h4>
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                className="mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <h5 className="font-bold text-gray-800">{item.title}</h5>
                <p className="text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSolutions;
