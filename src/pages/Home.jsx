import React from 'react';
import HeroExperience from "../home/HeroExperience"; 

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh',
      display: 'block', 
      width: '100vw',
      margin: 0,
      padding: 0
    }}>
      <HeroExperience />

      <section className="bg-black text-white py-32 flex flex-col items-center text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          We handle the infrastructure so you can build the product.
        </h2>
        <p className="text-base opacity-80 max-w-3xl mb-16 leading-relaxed">
          Auribus designs, deploys, and runs the cloud, CI/CD, and backend systems behind modern software — so your team can focus on what actually matters.
        </p>
        
        <h3 className="text-3xl font-semibold mb-6">
          Ready to build your product?
        </h3>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Talk to our experts →
        </a>
      </section>
      
    </div>
  );
}