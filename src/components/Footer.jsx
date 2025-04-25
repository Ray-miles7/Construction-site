// src/components/Footer.jsx
import { Mail, Send, MapPin, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
        
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">SABC Constructions</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Building Dubai's future with excellence and integrity. Commercial, residential, and infrastructure projects delivered with unmatched professionalism.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1" /> Dubai, UAE</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1" /> +971 50 123 4567</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1" /> info@sabcconstructions.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated on new projects and industry insights.</p>
          <form className="flex items-center bg-gray-800 rounded-full overflow-hidden p-1 shadow-inner">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none w-full"
            />
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full text-white transition">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} SABC Constructions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
