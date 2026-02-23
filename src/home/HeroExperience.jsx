import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 200;

export default function HeroExperience() {

  const [frame, setFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef(null);
  const imagesRef = useRef([]);




  useEffect(() => {

    imagesRef.current = [];

    let firstLoaded = false;

    for (let i = 1; i <= FRAME_COUNT; i++) {

      const img = new Image();

      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

      img.onload = () => {

        if (!firstLoaded) {

          setIsLoaded(true);
          firstLoaded = true;

        }

      };

      imagesRef.current.push(img);

    }

  }, []);





  useEffect(() => {

    let ticking = false;

    const onScroll = () => {

      if (!containerRef.current || ticking) return;

      ticking = true;

      requestAnimationFrame(() => {

        const rect = containerRef.current.getBoundingClientRect();

        const scroll = -rect.top;

        const maxScroll = rect.height - window.innerHeight;

        const progress = Math.max(0, Math.min(scroll / maxScroll, 1));

        const newFrame = Math.floor(progress * (FRAME_COUNT - 1));

        setFrame(newFrame);

        ticking = false;

      });

    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);

  }, []);






  const fade = (show) => ({

    opacity: show ? 1 : 0,

    transform: show ? "translateY(0)" : "translateY(24px)",

    transition: "all 1.1s cubic-bezier(0.22, 1, 0.36, 1)",

  });







  const headingStyle = {

    textShadow: "0 4px 30px rgba(0,0,0,0.65)"

  };



  const paragraphStyle = {

    textShadow: "0 2px 18px rgba(0,0,0,0.55)"

  };







  return (

    <section

      ref={containerRef}

      className="relative w-full bg-black"

      style={{ height: "400vh" }}

    >



      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">




        {isLoaded && (

          <img

            src={imagesRef.current[frame]?.src}

            alt="Ventus Soft"

            className="w-full h-full object-cover"

          />

        )}







        {/* HERO NAME */}

        <div className="absolute inset-0 z-20 flex items-center text-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

            <div style={fade(frame < 25)}>

              {frame < 25 && (

                <>

                  <h1

                    className="text-5xl md:text-7xl font-semibold tracking-tight"

                    style={headingStyle}

                  >

                    Ventus Soft

                  </h1>


                  <p

                    className="mt-5 text-lg md:text-xl text-white/75 font-normal"

                    style={paragraphStyle}

                  >

                    Engineering the systems behind modern software

                  </p>

                </>

              )}

            </div>

          </div>

        </div>







        {/* BOTTOM SUBTITLES */}

        <div className="absolute bottom-[12%] w-full text-white">




          {/* Gradient Contrast Layer */}

          <div

            className="absolute inset-0 pointer-events-none"

            style={{

              background:

                "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.28), transparent)",

              transform: "translateY(35%)"

            }}

          />






          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-lg">





              {/* Foundation */}

              <div style={fade(frame >= 25 && frame < 66)}>

                {frame >= 25 && frame < 66 && (

                  <>

                    <h2

                      className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3"

                      style={headingStyle}

                    >

                      Scalable foundations

                    </h2>


                    <p

                      className="text-white/75 font-normal"

                      style={paragraphStyle}

                    >

                      Core architecture engineered for stability

                    </p>

                  </>

                )}

              </div>







              {/* Growth */}

              <div style={fade(frame >= 66 && frame < 190)}>

                {frame >= 66 && frame < 190 && (

                  <>

                    <h2

                      className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3"

                      style={headingStyle}

                    >

                      Handles growth automatically

                    </h2>


                    <p

                      className="text-white/75 font-normal"

                      style={paragraphStyle}

                    >

                      Automated pipelines and systems working continuously

                    </p>

                  </>

                )}

              </div>







              {/* Secure */}

              <div style={fade(frame >= 190)}>

                {frame >= 190 && (

                  <>

                    <h2

                      className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-4"

                      style={headingStyle}

                    >

                      Secure and production-ready

                    </h2>


                    <p

                      className="text-white/75 mb-7 font-normal"

                      style={paragraphStyle}

                    >

                      Built for reliability, protection, and continuous operation

                    </p>





                    <a

                      href="/contact"

                      className="inline-block px-9 py-4 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.03]"

                      style={{

                        boxShadow:

                          "0 10px 40px rgba(255,255,255,0.18)"

                      }}

                    >

                      Talk to our experts →

                    </a>


                  </>

                )}

              </div>






            </div>

          </div>




        </div>




      </div>

    </section>

  );

}