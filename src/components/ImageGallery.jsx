// src/components/ImageGallery.jsx
import { motion } from "framer-motion";

const galleryImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.webp",
  "/images/project4.jpg",
  "/images/project1.jpg",
];

function ImageGallery() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Project Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={img}
                alt={`Project image ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
