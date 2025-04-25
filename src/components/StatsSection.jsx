// src/components/StatsSection.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Building2,
  Users,
  Globe2,
  Trophy,
} from "lucide-react"; // or use react-icons / custom svgs

const stats = [
  {
    number: 120,
    label: "Projects Completed",
    icon: <Building2 className="w-8 h-8 text-blue-700" />,
  },
  {
    number: 85,
    label: "Skilled Professionals",
    icon: <Users className="w-8 h-8 text-blue-700" />,
  },
  {
    number: 3,
    label: "Countries Operated In",
    icon: <Globe2 className="w-8 h-8 text-blue-700" />,
  },
  {
    number: 15,
    label: "Years of Excellence",
    icon: <Trophy className="w-8 h-8 text-blue-700" />,
  },
];

function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 text-center"
          >
            <div className="mb-4 flex justify-center">{stat.icon}</div>
            <div className="text-4xl font-bold text-blue-800">
              <CountUp end={stat.number} duration={2} suffix={stat.label === "Projects Completed" ? "+" : ""} />
            </div>
            <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
