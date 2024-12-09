"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  useEffect(() => {
    // GSAP Animation for footer sections
    gsap.fromTo(
      ".footer-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <motion.footer
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Footer Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Section 1: Join Us */}
        <div className="footer-section flex flex-col items-center md:items-start border-r-2 border-white">
          <h4 className="text-2xl font-semibold mb-4">Join Us</h4>
          <p className="text-lg mb-4">Follow us on social media:</p>
          <div className="icons flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} className="icn" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faTwitter} className="icn" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icn" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} className="icn" />
            </a>
          </div>
        </div>

        {/* Section 2: Divider */}
        <div className="footer-section flex flex-col items-center  border-r-2 border-white text-center">
          <h4 className="text-2xl text-center font-semibold mb-4">Contact Us</h4>
          <p className="text-lg mb-2">
            Email:{" "}
            <a
              href="mailto:support@dasca.org"
              className="hover:text-blue-400 transition"
            >
              support@dasca.org
            </a>
          </p>
          <p className="text-xs mt-6">© All rights reserved by DASCA</p>
        </div>

        {/* Section 3: Designed & Developed */}
        <div className="footer-section flex flex-col items-center ">
          <h4 className="text-2xl font-semibold mb-4">Designed & Developed</h4>
          <p className="text-lg">
            Built with precision and excellence by <strong>DASCA</strong>.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
