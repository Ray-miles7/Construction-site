// src/pages/News.jsx
import { motion } from "framer-motion";

const featuredPost = {
  title: "Skyline Towers Grand Opening: A New Era Begins",
  image: "/images/project1.jpg",
  excerpt:
    "Our landmark project Skyline Towers was officially opened this week, setting a new benchmark in commercial real estate...",
  date: "April 18, 2025",
};

const newsPosts = [
  {
    title: "Palm Heights Residences Sold Out",
    image: "/images/project2.jpg",
    excerpt:
      "We’re proud to announce Palm Heights Residences has reached full occupancy, marking a major milestone for our residential division.",
    date: "March 15, 2025",
  },
  {
    title: "Innovation Hub Receives Green Certification",
    image: "/images/project3.webp",
    excerpt:
      "Innovation Hub has been awarded the LEED Gold certification for its eco-conscious design and sustainable practices.",
    date: "February 8, 2025",
  },
  {
    title: "New Downtown Project Announced",
    image: "/images/project4.jpg",
    excerpt:
      "A new mixed-use project is coming to Downtown Dubai. Here’s what you can expect in 2026.",
    date: "January 28, 2025",
  },
];

function News() {
  return (
    <div className="px-4 py-12 bg-gray-50">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Latest News</h1>
        <p className="text-gray-600">Updates, stories, and industry insights from our team.</p>
      </div>

      {/* Featured Post */}
      <motion.div
        className="mb-16 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:flex">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full md:w-1/2 h-96 object-cover"
          />
          <div className="bg-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{featuredPost.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{featuredPost.date}</p>
            <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
            <button className="self-start px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Read More
            </button>
          </div>
        </div>
      </motion.div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {newsPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-blue-800">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-700 hover:underline">Read More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default News;
