import { Link } from "react-router-dom";

const projects = [
  {
    title: "Skyline Towers",
    slug: "skyline-towers",
    location: "Downtown Dubai",
    type: "Commercial",
    image: "/images/project1.jpg",
  },
  {
    title: "Palm Heights Residences",
    slug: "palm-heights",
    location: "Palm Jumeirah",
    type: "Residential",
    image: "/images/project2.jpg",
  },
  {
    title: "Innovation Hub",
    slug: "innovation-hub",
    location: "Dubai Silicon Oasis",
    type: "Tech Park",
    image: "/images/project3.webp",
  },
];

function Projects() {
  return (
    <div className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Projects</h2>
        <p className="mb-10 text-gray-600 max-w-xl">
          We are a construction company based in Dubai delivering excellence across commercial, residential, and tech infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.slug} to={`/project/${project.slug}`}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{project.type} • {project.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
