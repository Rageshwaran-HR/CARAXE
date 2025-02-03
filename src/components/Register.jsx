import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Register.css";

const Register = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 50 - 25,
      y: (e.clientY / window.innerHeight) * 50 - 25,
    });
  };

  return (
    <div className="register-container" onMouseMove={handleMouseMove}>
      <motion.div
        className="parallax-circle circle-1"
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "tween", ease: "easeOut" }}
      />
      <motion.div
        className="parallax-circle circle-2"
        animate={{ x: -mousePos.x * 0.3, y: -mousePos.y * 0.3 }}
        transition={{ type: "tween", ease: "easeOut" }}
      />

      <motion.div
        className="register-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a
          href="https://www.google.com/maps?q=Velammal+Engineering+College&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="map-background-link"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1958485629307!2d80.19183319999999!3d13.150043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1738518203439!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>

        <div className="map-overlay"></div>

        <motion.h1 className="title" whileHover={{ scale: 1.05, color: "#ff007f" }}>
          Join the Experience
        </motion.h1>

        <p className="description">Elevate your skills at an exclusive event.</p>

        <a href="https://forms.gle/VSZrSWneZ38nwHDe9" target="_blank" rel="noopener noreferrer">
          <motion.div
            className="price-tag cursor-pointer"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ₹150 /- ONLY
            <br />
            <br />
            REGISTER NOW
          </motion.div>
        </a>



        {/* Contact Details */}
        <div className="contact-details">
          <p><strong>Phone:</strong> 9363635125 / 98435 15256</p>
          <p><strong>Email:</strong>Caraxe2k25@gmail.com</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
