import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    // GOLDEN RULE: py-16 lg:py-16
    <section className="py-16 lg:py-16 text-center">
      <div className="layout-container">
        
        {/* CENTERED CONTENT WRAPPER */}
        <div className="max-w-4xl mx-auto">
          
          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight"
          >
            Let’s build your success story
          </motion.h2>

          {/* SUBTEXT */}
          <p className="text-xl lg:text-2xl text-white/65 leading-relaxed max-w-2xl mx-auto mb-12">
            Whether it’s Cloud, DevOps, MERN, React Native, or WordPress —
            we deliver systems teams can trust and scale.
          </p>

          {/* BUTTON */}
          <Link to="/contact" className="inline-block no-underline">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59,130,246,0.5), 0 0 20px rgba(168,85,247,0.3)", // Blue/Purple glow
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-medium tracking-wide cursor-pointer transition-all duration-300"
            >
              Contact Us 
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}