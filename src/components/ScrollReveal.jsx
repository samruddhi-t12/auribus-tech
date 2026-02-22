
import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // When seen, fade in and float up
      viewport={{ once: true, amount: 0.3 }} // "once: true" means it won't disappear when you scroll back up
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;