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
      {/* Floating Background Elements for Parallax Effect */}
      <motion.div
        className="parallax-circle circle-1"
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        transition={{ type: "tween", ease: "easeOut" }}
      />
      <motion.div
        className="parallax-circle circle-2"
        animate={{
          x: -mousePos.x * 0.3,
          y: -mousePos.y * 0.3,
        }}
        transition={{ type: "tween", ease: "easeOut" }}
      />

      {/* Registration Card */}
      <motion.div
        className="register-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="title"
          whileHover={{ scale: 1.05, color: "#ff007f" }}
        >
          Join the Experience
        </motion.h1>

        <p className="description">
          Elevate your skills at an exclusive event.
        </p>

        {/* Entry Fee with Floating Animation */}
        <motion.div
          className="price-tag"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ₹150 /- ONLY
          <br/>
                    <br/>

          REGISTER NOW
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
