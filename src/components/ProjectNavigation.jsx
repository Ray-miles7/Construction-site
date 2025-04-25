// src/components/ProjectNavigation.jsx
import { Link } from "react-router-dom";

function ProjectNavigation() {
  return (
    <section className="bg-white py-16 px-4 border-t">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold text-blue-800 mb-1">Explore More Projects</h4>
          <p className="text-gray-600">Interested in what else we’ve built?</p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="bg-blue-800 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            All Projects
          </Link>
          <Link
            to="/project/palm-heights"
            className="text-blue-800 border border-blue-800 px-5 py-2 rounded-xl hover:bg-blue-50 transition"
          >
            Next Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectNavigation;
