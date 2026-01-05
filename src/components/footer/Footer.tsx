// src/components/Home/Footer.tsx

import { Link } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 py-10">
      {/* Top Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/subscriber-agreement" className="hover:text-white">
                Subscriber Agreement
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/premier-access" className="hover:text-white">
                Premier Access
              </Link>
            </li>
            <li>
              <Link to="/intellectual-property" className="hover:text-white">
                Intellectual Property
              </Link>
            </li>
            <li>
              <Link to="/accessibility-statement" className="hover:text-white">
                Accessibility Statement
              </Link>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-white font-semibold mb-3">FAQ</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/subscription-page" className="hover:text-white">
                Subscription
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white">
                Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Info</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support & Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/creator" className="hover:text-white">
                About Me
              </Link>
            </li>
            <li>
              <a href="/Security" className="hover:text-white">
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* App Download Section */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-800 pt-6">
        <p className="text-center text-white font-semibold mb-4">Get the App</p>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" className="hover:text-white" aria-label="Google Play">
            <FaGooglePlay />
          </a>
          <a href="https://www.apple.com/in/" target="_blank" className="hover:text-white" aria-label="Apple App Store">
            <FaApple />
          </a>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-6xl mx-auto mt-8 text-center text-xs text-gray-500 space-y-2">
        <p>
          Companion.ai is an avatar-based dating platform designed for
          meaningful connections, conversations, and companionship.
        </p>
        <p>© {new Date().getFullYear()} Companion.ai. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
