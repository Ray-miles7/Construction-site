function ProjectHero({ title, location, type, image }) {
    return (
      <section
        className="h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-black bg-opacity-60 w-full p-8 text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-2">{type} • {location}</p>
        </div>
      </section>
    );
  }
  
  export default ProjectHero;
  