import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[50vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }}>
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you. Let's build something together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have a question or want to start a project with us? Reach out through any of the methods below.
          </p>
          <div className="space-y-4 text-gray-700">
            <p><strong>Address:</strong> Office 420, Business Bay, Dubai, UAE</p>
            <p><strong>Email:</strong> contact@dubuildco.com</p>
            <p><strong>Phone:</strong> +971 4 123 4567</p>
            <p><strong>Working Hours:</strong> Sun - Thu: 9AM - 6PM</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        {/* Contact Form */}
<motion.form
  className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>

  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
    <input
      type="text"
      placeholder="John Doe"
      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
    <input
      type="email"
      placeholder="john@example.com"
      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
    <textarea
      rows="5"
      placeholder="Write your message..."
      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
  >
    Send Message
  </button>
</motion.form>

      </div> {/* End of content wrapper */}

      {/* Map Section */}
      <div className="w-full h-[450px]">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0402035313647!2d55.2707829150111!3d25.204849983895205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433456f83e1f%3A0x26d4f84b0a22a8b4!2sDubai%20Mall!5e0!3m2!1sen!2sae!4v1714025642893!5m2!1sen!2sae"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
