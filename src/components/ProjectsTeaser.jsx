// src/components/ProjectsTeaser.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Skyline Towers",
    type: "Commercial",
    description: "A modern skyscraper redefining Dubai’s skyline with innovative architecture.",
    image: "/images/project1.jpg",
    featured: true,
  },
  {
    title: "Palm Residence",
    type: "Residential",
    description: "Luxury beachfront living on the iconic Palm Jumeirah island.",
    image: "/images/project2.jpg",
  },
  {
    title: "Metro Hub",
    type: "Infrastructure",
    description: "A new central hub connecting key districts through high-speed transit.",
    image: "/images/project4.jpg",
  },
];

function ProjectsTeaser() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Our Projects</h2>
          <p className="text-gray-600 mt-4">A curated glimpse at our recent builds in Dubai.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured Project */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg md:col-span-2 h-[400px] group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4">
                <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {projects[0].type}
                </span>
              </div>
              {projects[0].featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                    Featured
                  </span>
                </div>
              )}
              {/* Static Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold">{projects[0].title}</h3>
                <p className="text-sm mt-2">{projects[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Smaller Projects */}
          <div className="flex flex-col gap-6">
            {projects.slice(1).map((project, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg h-[195px] group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  {/* Static Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-2xl">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-xs mt-1">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/projectDetails"
            className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-900 transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTeaser;
