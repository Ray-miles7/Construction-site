import { useParams } from "react-router-dom";
import ProjectHero from "../components/ProjectHero";
import ImageGallery from "../components/ImageGallery";
import ChallengesSolutions from "../components/ChallengesSolutions";
import ProjectTestimonials from "../components/ProjectTestimonials";
import ProjectNavigation from "../components/ProjectNavigation";



const projects = [
  {
    slug: "skyline-towers",
    title: "Skyline Towers",
    location: "Downtown Dubai",
    type: "Commercial",
    image: "/images/project1.jpg",
    summary:
      "Skyline Towers redefines the Dubai skyline with its modern architecture and state-of-the-art facilities. Completed in 2024, it now hosts over 60 multinational firms and continues to be a landmark project in the region.",
    stats: {
      completion: "2024",
      duration: "18 months",
      budget: "$120M",
    },
  },
  {
    slug: "palm-heights",
    title: "Palm Heights Residences",
    location: "Palm Jumeirah",
    type: "Residential",
    image: "/images/project2.jpg",
    summary:
      "Palm Heights offers luxury beachfront living with over 200 premium units. Completed in 2023, it has become one of the most sought-after residences in Dubai.",
    stats: {
      completion: "2023",
      duration: "14 months",
      budget: "$90M",
    },
  },
  {
    slug: "innovation-hub",
    title: "Innovation Hub",
    location: "Dubai Silicon Oasis",
    type: "Tech Park",
    image: "/images/project3.webp",
    summary:
      "Innovation Hub is a tech-forward complex designed to support over 100 startups. It features smart systems, green energy solutions, and flexible office space.",
    stats: {
      completion: "2022",
      duration: "16 months",
      budget: "$75M",
    },
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.slug === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-red-600 font-bold">Project Not Found</h2>
        <p className="text-gray-600 mt-4">Please check the URL or go back to the Projects page.</p>
      </div>
    );
  }

  return (
    <div>
      <ProjectHero
        title={project.title}
        location={project.location}
        type={project.type}
        image={project.image}
      />

      {/* Summary Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            {project.summary}
          </p>
          <div className="flex justify-center gap-8 text-blue-800 font-semibold text-sm md:text-base">
            <div>
              <p className="text-gray-400">Completed</p>
              <p>{project.stats.completion}</p>
            </div>
            <div>
              <p className="text-gray-400">Duration</p>
              <p>{project.stats.duration}</p>
            </div>
            <div>
              <p className="text-gray-400">Budget</p>
              <p>{project.stats.budget}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ImageGallery />
          
        
        {/* Challenges and Solutions */}
        <ChallengesSolutions />
            
            {/* Testimonials */}
            <ProjectTestimonials />
                
                
                {/* Navigation */}
                <ProjectNavigation />
    </div>
  );
}

export default ProjectDetail;
