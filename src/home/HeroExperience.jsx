import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 126;

export default function HeroExperience() {
  const [frame, setFrame] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const preloadedImagesRef = useRef([]);

  useEffect(() => {
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      preloadedImagesRef.current.push(img);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!containerRef.current || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const container = containerRef.current;
        const { top, height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollDistance = -top;
        const maxScroll = Math.max(height - windowHeight, 1);

        let p = scrollDistance / maxScroll;
        p = Math.max(0, Math.min(p, 1));

        setProgress(p);
        setFrame(Math.floor(p * (FRAME_COUNT - 1)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); 
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = (visible) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(14px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    pointerEvents: visible ? "auto" : "none",
  });

  return (
    <section ref={containerRef} className="relative bg-black w-full" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <img
          src={`/frames/ezgif-frame-${String(frame + 1).padStart(3, "0")}.jpg`}
          alt="Auribus cinematic"
          className="
            w-full h-full object-cover
            scale-[1.04]
            blur-[0.25px]
            contrast-[1.05]
            brightness-[0.9]
          "
        />

        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.05] pointer-events-none z-10" />

        <div className="absolute inset-0 z-20 pointer-events-none text-white">

          <div
            className="absolute left-[10%] top-1/2 -translate-y-1/2"
            style={fadeUp(progress < 0.15)}
          >
            {progress < 0.15 && (
              <h1 className="text-5xl font-semibold">
                Auribus Tech
              </h1>
            )}
          </div>

          <div className="absolute left-[10%] bottom-[12%] max-w-md">

            <div style={fadeUp(progress >= 0.15 && progress < 0.4)}>
              {progress >= 0.15 && progress < 0.4 && (
                <>
                  <h2 className="text-3xl font-semibold mb-2">
                    BUILD BETTER APPS
                  </h2>
                  <p className="text-base opacity-80">
                    High-performance Web & Mobile solutions. React, Node, & Native.
                  </p>
                </>
              )}
            </div>

            <div style={fadeUp(progress >= 0.4 && progress < 0.65)}>
              {progress >= 0.4 && progress < 0.65 && (
                <>
                  <h2 className="text-3xl font-semibold mb-2">
                    AUTOMATE EVERYTHING
                  </h2>
                  <p className="text-base opacity-80">
                    CI/CD pipelines ensuring 99.9% reliable releases.
                  </p>
                </>
              )}
            </div>

            <div style={fadeUp(progress >= 0.65 && progress < 0.85)}>
              {progress >= 0.65 && progress < 0.85 && (
                <>
                  <h2 className="text-3xl font-semibold mb-2">
                    SCALE ON DEMAND
                  </h2>
                  <p className="text-base opacity-80">
                    Enterprise Kubernetes & Cloud Infrastructure on AWS, Azure, & GCP.
                  </p>
                </>
              )}
            </div>

            <div style={fadeUp(progress >= 0.85)}>
              {progress >= 0.85 && (
                <>
                  <h2 className="text-3xl font-semibold mb-2">
                    SECURE BY DESIGN
                  </h2>
                  <p className="text-base opacity-80 mb-5">
                    Monitoring, security & reliability built into every layer.
                  </p>

                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-black rounded-lg pointer-events-auto"
                  >
                    Talk to our experts →
                  </a>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}