import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="p-4  bg-gray-900 text-gray-400 p-6">
    <div className="flex flex-wrap justify-center space-x-6 mb-4">
      <Link to="#" className="hover:text-white">English</Link>
      <Link to="#" className="hover:text-white">Subscriber Agreement</Link>
      <Link to="#" className="hover:text-white">Privacy Policy</Link>
      <Link to="#" className="hover:text-white">Help</Link>
      <Link to="#" className="hover:text-white">About Us</Link>
      <Link to="#" className="hover:text-white">Premier Access</Link>
    </div>
    <div className="text-center text-sm">
      <p>The Chitauri - Avatar based Dating App ❤️ Bundle</p>
      <p>
        &copy; {new Date().getFullYear()} Chitauri - Avatar based Dating App ❤️. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
