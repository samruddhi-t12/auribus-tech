{/*}
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Scene01Vision from "../home/Scene01Vision";
import Scene02Product from "../home/Scene02Product";
import Scene03Infra from "../home/Scene03Infra";
import Scene04Scale from "../home/Scene04Scale";
import Scene05Services from "../home/Scene05Services";
import Scene06Security from "../home/Scene06Security"; 
import Scene07CTA from "../home/Scene07CTA"; 

export default function Home() {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(2), 4000),  // Scene 1 → 2
      setTimeout(() => setScene(3), 10000),  // Scene 2 → 3
      setTimeout(() => setScene(4), 15000), // Scene 3 → 4
      setTimeout(() => setScene(5), 22000), // Scene 4 → 5
      setTimeout(() => setScene(6), 29000), // Scene 5 → 6
    

    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <AnimatePresence mode="sync">
        {scene === 1 && (
          <motion.div
            key="scene1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Scene01Vision />
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="scene2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Scene02Product />
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="scene3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Scene03Infra />
          </motion.div>
        )}

        {scene === 4 && (
          <motion.div
            key="scene4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Scene04Scale />
          </motion.div>
        )}

        {scene === 5 && (
          <motion.div
            key="scene5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Scene05Services />
          </motion.div>
        )}
      </AnimatePresence>

      {scene === 6 && (
        <motion.div
          key="scene6"
          initial={{ opacity: 0 } }
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Scene06Security />
        </motion.div>
      )}
     

    </div>
  );
}
  */}


{/*import HeroNarrative from "../home/HeroNarrative";

export default function Home() {
  return <HeroNarrative />;
}*/}

// Adjust the path below if your folder structure is different
// e.g. import HeroExperience from "../components/home/HeroExperience";
import HeroExperience from "../home/HeroExperience"; 

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh',
      display: 'block', 
      width: '100vw',
      overflowX: 'hidden',
      margin: 0,
      padding: 0
    }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
        <HeroExperience />
      </div>
    </div>
  );
}