import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// SCENEs
const SCENES = [
  {
    id: 'scene1-ui',
    image: "/images/scene3-cable.jpg",
    initial: { scale: 1.4, x: '0%', y: '25%' },
    animate: { scale: 1.8, x: '0%', y: '15%' },
    exit: { opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }, 
    transition: { duration: 6, ease: "easeInOut" },
    title: "BUILD BETTER APPS",
    subtitle: "High-performance Web & Mobile solutions. React, Node, & Native.",
    position: "right",
    zIndex: 1
  },
  {
    id: 'scene2-cable',
    image: "/images/scene3-cable.jpg",
    initial: { scale: 1.8, x: '0%', y: '15%' },
    animate: { scale: 1.55, x: '10%', y: '-30%' },
    exit: { opacity: 0, scale: 4, filter: "blur(40px)", transition: { duration: 1.2, ease: "easeIn" } }, 
    transition: { duration: 6, ease: "easeInOut" },
    title: "AUTOMATE EVERYTHING",
    subtitle: "CI/CD pipelines ensuring 99.9% reliable releases.",
    position: "right",
    zIndex: 2
  },
  {
    id: 'scene3-cloud',
    image: "/images/cloud-2.png", 
    initial: { scale: 1.2, x: '0%', y: '5%', opacity: 0 },
    animate: { scale: 1.5, x: '0%', y: '20%', opacity: 1 },
    exit: { scale: 3.0, opacity: 0, transition: { duration: 2.5, ease: "easeInOut" } }, 
    transition: { duration: 8, ease: "linear" },
    title: "SCALE ON DEMAND",
    subtitle: "Enterprise Kubernetes & Cloud Infrastructure on AWS, Azure, & GCP.",
    position: "left",
    isCloud: true,
    zIndex: 3
  },
  {
    id: 'scene4-security',
    image: "/images/shield-2.png", 
    initial: { scale: 1.3, x: '0%', y: '0%', opacity: 0 }, 
    animate: { scale: 1.0, x: '0%', y: '0%', opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 8, ease: "easeOut" },
    title: "UNBREAKABLE SECURITY",
    subtitle: "Advanced threat protection for your peace of mind.",
    position: "left",
    isLast: true,
    isSecurity: true,
    zIndex: 4
  }
];

//INTRO
const IntroSequence = ({ onComplete }) => {
  const text = "AURIBUS  TECH".split("");
  
  useEffect(() => {
    const timer = setTimeout(() => { onComplete(); }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.section
      initial={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ 
        height: "100vh", 
        width: "100vw", 
        background: "#000", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden", 
        position: "fixed", 
        top: 0, 
        left: 0, 
        zIndex: 9999 
      }}
    >
      <div style={{ textAlign: "center" }}>
        <motion.div style={{ display: "flex", gap: "0.1em", fontSize: "clamp(30px, 5vw, 60px)", fontWeight: 600, letterSpacing: "0.03em", color: "#ffffff" ,fontFamily: '"Orbitron", sans-serif' }}> 
          {text.map((char, i) => (
            <motion.span 
              key={i} 
              initial={{ opacity: 0, y: 18 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 + i * 0.07, duration: 0.5, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: "52%", opacity: 1 }} 
          transition={{ delay: 1.8, duration: 1, ease: "easeInOut" }} 
          style={{ 
            height: "2px", 
            margin: "22px auto 0", 
            background: "linear-gradient(90deg, transparent, #4FA3FF, #E6C98A, transparent)", 
            boxShadow: "0 0 18px rgba(79,163,255,0.35)", 
            borderRadius: "2px" 
          }} 
        />
      </div>
    </motion.section>
  );
};

//HERO
const HeroExperience = () => {
  const navigate = useNavigate();
  const [introFinished, setIntroFinished] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (!introFinished) return;
    if (currentScene < SCENES.length - 1) {
      const timer = setTimeout(() => {
        setCurrentScene((prev) => prev + 1);
      }, SCENES[currentScene].transition.duration * 1000); 
       return () => clearTimeout(timer);
    }
  }, [introFinished, currentScene]);

  const styles = {
    container: { 
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
      backgroundColor: '#000', overflow: 'hidden', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      color: 'white', zIndex: 0 
    },
    imageLayer: { 
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#000' 
    },
    image: { width: '100%', height: '100%', objectFit: 'contain' },
    
    shadowOverlay: {
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        boxShadow: 'inset 0 0 250px 150px #000',
        pointerEvents: 'none', zIndex: 2
    },

    textWrapper: (position) => ({
      position: 'absolute',
      bottom: '10%',
      left: position === 'left' ? '5%' : 'auto',
      right: position === 'right' ? '5%' : 'auto',
      textAlign: position === 'right' ? 'right' : 'left',
      zIndex: 50, display: 'flex', flexDirection: 'column',
      alignItems: position === 'right' ? 'flex-end' : 'flex-start',
      maxWidth: '90%', 
    }),
    title: { 
      fontSize: 'clamp(18px, 4vw, 30px)', 
      fontWeight: 500, 
      letterSpacing: '0.1em', 
      color: '#ffffff', 
      marginBottom: '1rem', 
      margin: 0 
    },
    subtitle: { 
      fontSize: '0.85rem', 
      fontWeight: 300, 
      color: '#ccc', 
      marginTop: '10px', 
      lineHeight: 1.5 
    },
    
    hudLock: {
      position: 'absolute', 
      top: '45.5%', 
      left: '46%', 
      transform: 'translate(-50%, -50%)',
      width: '13vmin', 
      height: '13vmin',
      borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', zIndex: 60,
      background: 'rgba(0, 0, 0, 0.4)', 
      backdropFilter: 'blur(8px)', 
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)'
    }
  };

  return (
    <div style={styles.container}>
      <AnimatePresence>{!introFinished && (<IntroSequence onComplete={() => setIntroFinished(true)} />)}</AnimatePresence>
      
      {introFinished && (
      <AnimatePresence>
        <motion.div 
            key={SCENES[currentScene].id} 
            style={{ ...styles.imageLayer, zIndex: SCENES[currentScene].zIndex }}
            initial={SCENES[currentScene].initial} 
            animate={SCENES[currentScene].animate} 
            exit={SCENES[currentScene].exit}
            transition={SCENES[currentScene].transition}
        >
          <motion.img 
            src={SCENES[currentScene].image} 
            alt={SCENES[currentScene].title} 
            style={styles.image}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeInOut", delay: currentScene === 0 ? 1.5 : 0 }}
          />
          
          {(SCENES[currentScene].isCloud || SCENES[currentScene].isSecurity) && (
              <div style={styles.shadowOverlay} />
          )}

          {SCENES[currentScene].isSecurity && !isUnlocked && (
             <motion.div
               style={styles.hudLock}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ 
                 opacity: 1, 
                 scale: [1, 1.05, 1],
                 borderColor: ['rgba(255,255,255,0.2)', '#4FA3FF', 'rgba(255,255,255,0.2)'], 
                 boxShadow: ['0 0 30px rgba(0, 0, 0, 0.5)', '0 0 50px rgba(79,163,255,0.3)', '0 0 30px rgba(0, 0, 0, 0.5)']
               }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               whileHover={{ scale: 1.1, cursor: 'pointer' }}
               onClick={() => setIsUnlocked(true)}
             >
                <motion.div
                   style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid #4FA3FF' }}
                   animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                 <motion.div
                   style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid #4FA3FF' }}
                   animate={{ scale: [1, 2], opacity: [0.8, 0] }} 
                   transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeOut" }} 
                />
                <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ zIndex: 2 }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <div style={{ 
                       position: 'absolute', top: '160%', width: 'max-content', padding: '0.6vmin 1.6vmin', 
                       background: 'rgba(0, 10, 30, 0.6)', border: '1px solid rgba(79, 163, 255, 0.3)', 
                       borderRadius: '4px', fontSize: '1.2vmin', letterSpacing: '0.25em', fontWeight: 600,
                       color: '#4FA3FF', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', pointerEvents: 'none', 
                   }}>
                    Click to Verify
                </div>
             </motion.div>
          )}

          {isUnlocked && (
            <motion.div
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 60 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <button 
                style={{ 
                    padding: '2vmin 4vmin', fontSize: '2vmin', whiteSpace: 'nowrap',
                    background: 'linear-gradient(135deg, #396ac7 0%, #aa8c20 100%)', color: '#fff', 
                    border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', fontWeight: '600', 
                    cursor: 'pointer', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.1)',
                    letterSpacing: '0.1em', textTransform: 'uppercase'
                }} 
                onClick={() => navigate('/contact')}
              >
                Talk to Our Experts
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      )}

      {introFinished && (
      <AnimatePresence mode='wait'>
        <motion.div
          key={`text-${SCENES[currentScene].id}`}
          style={styles.textWrapper(SCENES[currentScene].position)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: currentScene === 0 ? 1.8 : 1 }} 
        >
          <h1 style={styles.title}>{SCENES[currentScene].title}</h1>
          <p style={styles.subtitle}>{SCENES[currentScene].subtitle}</p>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, #4FA3FF, transparent)", marginTop: "15px", opacity: SCENES[currentScene].isSecurity ? 0 : 1 }} />
        </motion.div>
      </AnimatePresence>
      )}
    </div>
  );
};

export default HeroExperience;