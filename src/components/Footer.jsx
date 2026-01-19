import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-16 pb-8 text-white mt-auto">
      <div className="layout-container flex flex-wrap justify-between items-center gap-8">
        
        {/* LEFT — BRAND */}
        <div className="max-w-xs flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-extrabold text-xs text-black shadow-lg">
              A
            </div>
            {/* UPDATED FONT TO MATCH NAVBAR */}
            <span className="text-lg font-bold tracking-wider uppercase font-['Orbitron']">
              Auribus Tech
            </span>
          </div>

          <p className="text-sm text-white/50 leading-relaxed">
            DevOps, Cloud & scalable product engineering.
          </p>
        </div>

        {/* RIGHT — LINKS */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <Link to="/services" className="text-white/70 hover:text-sky-400 transition-colors font-medium">Services</Link>
          <Link to="/about" className="text-white/70 hover:text-sky-400 transition-colors font-medium">About</Link>
          <Link to="/contact" className="text-white/70 hover:text-sky-400 transition-colors font-medium">Contact</Link>

          {/* Separator Dot */}
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />

          <a 
            href="mailto:support@auribustech.com" 
            className="flex items-center gap-2 text-white/45 hover:text-sky-400 transition-colors"
          >
            <FaEnvelope />
            support@auribustech.com
          </a>

          <a
            href="https://www.linkedin.com/in/auribus-tech-673657268/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/45 hover:text-sky-400 transition-colors"
          >
            <FaLinkedin />
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30">
        © 2026 Auribus Tech. All rights reserved.
      </div>
    </footer>
  );
}