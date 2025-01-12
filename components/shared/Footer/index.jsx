"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";


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
      className=" px-3 md:px-10 lg:px-16 w-full  bg-white text-black py-10 relative overflow-hidden border-t-2 h-72 items-center rounded-t-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Footer Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-center">
        {/* Section 1: Join Us */}
        <div className="footer-section flex flex-col items-center md:items-start  h-5/6">
          <h4 className="text-3xl font-semibold mb-4 join">Join Us</h4>
          <p className="text-lg mb-4 folow">Follow us on social media:</p>
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
        <div className="footer-section flex flex-col items-center  border-r-2  border-l-2 border-black  text-center h-full">
          <div className="border-b-2 border-black w-3/4 h-full p-1">
          <h4 className="text-3xl text-center font-semibold mb-4">Contact Us</h4>
          <div className=" pb-2">
          <p className="text-lg mb-2  ">
            Email:{" "}
            <a
              href="mailto:support@dasca.org"
              className=" email hover:text-blue-400 transition text-lg"
            >
              dasca@rknec.edu
            </a>
           
          </p>
          </div>
          </div>
          <div>
          <p className="text-xl mt-8 ">© All rights reserved by    <span className="text-blue-400"><b>DASCA</b></span></p>
          </div>
        </div>

        {/* Section 3: Designed & Developed */}
        <div className="footer-section flex flex-col items-center justify-start">
          <h4 className="text-3xl font-semibold mb-4">Designed & Developed</h4>
          <p className="text-lg">
            Built with precision and excellence by <span className="text-blue-400"><b>DASCA</b></span>.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
