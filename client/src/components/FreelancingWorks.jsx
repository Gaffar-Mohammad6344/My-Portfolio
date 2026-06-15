import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// --- IMAGE IMPORTS ---
import bb1 from "../assets/freelance/bb1.png";
import bb2 from "../assets/freelance/bb2.png";
import bb3 from "../assets/freelance/bb3.png";
import bb4 from "../assets/freelance/bb4.png";
import bb5 from "../assets/freelance/bb5.png";
import bb6 from "../assets/freelance/bb6.png";
import bb7 from "../assets/freelance/bb7.png";
import bb8 from "../assets/freelance/bb8.png";
import bb9 from "../assets/freelance/bb9.png";

import r1 from "../assets/freelance/r1 (1).png";
import r2 from "../assets/freelance/r2.png";
import r3 from "../assets/freelance/r3.png";
import r4 from "../assets/freelance/r4.png";
import r5 from "../assets/freelance/r5.png";
import r6 from "../assets/freelance/r6.png";

import linkedinPost from "../assets/freelance/Linkedin_post (14).png";
import paniPuri from "../assets/freelance/pani puri.png";

export const freelancingWorks = {
  bengaluruCafe: [
    { title: "Benne Bengaluru", image: bb1 },
    { title: "Benne Bengaluru", image: bb2 },
    { title: "Benne Bengaluru", image: bb3 },
    { title: "Benne Bengaluru", image: bb4 },
    { title: "Benne Bengaluru", image: bb5 },
    { title: "Benne Bengaluru", image: bb6 },
    { title: "Benne Bengaluru", image: bb7 },
    { title: "Benne Bengaluru", image: bb8 },
    { title: "Benne Bengaluru", image: bb9 },
  ],
  reviddDesigns: [
    { title: "Revidd", image: r1 },
    { title: "Revidd", image: r2 },
    { title: "Revidd", image: r3 },
    { title: "Revidd", image: r4 },
    { title: "Revidd", image: r5 },
    { title: "Revidd", image: r6 },
  ],
  otherDesigns: [
    { title: "LinkedIn Creative", image: linkedinPost },
    { title: "Pani Puri Branding", image: paniPuri },
  ]
};

const FreelancingWorks = () => {
  const allWorks = useMemo(() => {
    const combined = [
      ...freelancingWorks.bengaluruCafe.map((w) => ({ ...w, category: "BENNE BENGALURU" })),
      ...freelancingWorks.reviddDesigns.map((w) => ({ ...w, category: "SOCIAL BRANDING REVIDD" })),
      ...freelancingWorks.otherDesigns.map((w) => ({ ...w, category: "NORMAL" })),
    ];
    return combined.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section
      id="freelancing"
      className="relative py-12 lg:py-16 overflow-hidden border-y"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-16 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-1 rounded-full bg-red-600 animate-pulse" />
              <p className="text-red-500 text-[9px] font-bold uppercase tracking-[0.4em]">
                Freelance Archive
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase" style={{ color: "var(--text-primary)" }}>
              Graphic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
                Designs
              </span>
            </h2>
          </motion.div>

          <p className="text-[10px] uppercase tracking-widest max-w-[200px] leading-relaxed border-l pl-4" style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }}>
            A curated stream of visual identity and digital interfaces.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="cursor-grab active:cursor-grabbing border-y py-8"
          style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={"auto"}
            loop={true}
            speed={6000} // Slightly faster for smoother linear feel
            freeMode={true}
            centeredSlides={true} // Keeps the color transition in the middle
            watchSlidesProgress={true} // Essential for the "visible" color effect
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="cinematic-swiper !overflow-visible"
          >
            {allWorks.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <motion.div
                  className={`group relative flex flex-col transition-all duration-700 ${
                    index % 2 === 0 ? "pt-8" : "pb-8"
                  }`}
                >
                  <div
                    className="work-card-container relative h-[280px] w-[200px] md:h-[380px] md:w-[280px] overflow-hidden rounded-lg border transition-all duration-700"
                    style={{ background: "var(--bg-card)", borderColor: "var(--border-color)" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="work-image h-full w-full object-cover transition-all duration-1000"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-2 py-1 mb-2 text-[8px] font-bold tracking-tighter bg-red-600 text-white rounded-[2px]">
                          {item.category}
                        </span>
                        <h4 className="text-base font-bold text-white tracking-tight leading-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <div className="absolute top-3 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-white tracking-widest">
                        SCENE_{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer */}
        <div className="px-6 lg:px-16 mt-8 flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-[2px] w-4 ${i === 0 ? "bg-red-600" : ""}`} style={i !== 0 ? { background: "var(--border-color)" } : {}} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-black uppercase tracking-[0.5em]" style={{ color: "var(--text-muted)" }}>
              Auto-Scroll Enabled
            </span>
            <div className="h-4 w-[1px]" style={{ background: "var(--border-color)" }} />
            <div className="flex gap-2 text-red-600">
                <span className="animate-pulse">●</span>
                <span className="text-[8px] font-bold uppercase tracking-widest">Live Stream</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Continuous Linear Scroll */
        .cinematic-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        /* DEFAULT STATE: B&W and Dimmed */
        .work-image {
          filter: grayscale(100%) brightness(0.5);
          transform: scale(0.95);
          opacity: 0.4;
        }

        /* FOCUS STATE: Color and Brightness for Active and Next Slide */
        /* Targets the 2 slides in the middle/focus area */
        .swiper-slide-active .work-image,
        .swiper-slide-next .work-image,
        .swiper-slide-active + .swiper-slide .work-image {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.05);
          opacity: 1;
        }

        /* Slightly scale the container of the active slide */
        .swiper-slide-active .work-card-container {
          border-color: rgba(220, 38, 38, 0.5) !important;
          box-shadow: 0 0 30px rgba(0,0,0,0.5);
        }

        /* Hover Override: Allow manual focus on any slide */
        .swiper-slide:hover .work-image {
          filter: grayscale(0%) brightness(1) !important;
          transform: scale(1.1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default FreelancingWorks;