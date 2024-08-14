import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white absolute w-full py-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about-us" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">Samant sahi, new colony, cuttack</p>
            <p className="mb-2">Phone: 7077817064</p>
            <p className="mb-2">Email: priyapradhan@example.com</p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 mb-2 text-gray-800"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
