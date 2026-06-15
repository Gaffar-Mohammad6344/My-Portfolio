import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { interests } from "../data/interests";

const InterestCard = ({ interest }) => {
  const Icon = interest.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      className="group relative flex h-[280px] w-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl text-red-500 transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-0 blur-md bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <Icon className="relative z-10" />
        </div>

        <h3 className="mt-6 text-lg font-bold tracking-tight group-hover:text-red-500 transition-colors" style={{ color: "var(--text-primary)" }}>
          {interest.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {interest.description}
        </p>

        <div className="mt-auto pt-6">
          <div className="h-[1px] w-8 bg-red-500/40 transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
};

const Interests = () => {
  return (
    <section id="interests" className="relative overflow-hidden py-24" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[5%] -top-[5%] h-[400px] w-[400px] rounded-full blur-[100px]" style={{ background: "rgba(220,38,38,0.04)" }} />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="relative mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500">
                Personal Passions
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: "var(--text-primary)" }}>
              Beyond the <span className="text-red-500">Terminal</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="prev-btn flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:border-red-500/50 hover:text-red-500" style={{ borderColor: "var(--border-color)", background: "var(--social-bg)", color: "var(--text-secondary)" }}>
              <FaChevronLeft size={14} />
            </button>
            <button className="next-btn flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:border-red-500/50 hover:text-red-500" style={{ borderColor: "var(--border-color)", background: "var(--social-bg)", color: "var(--text-secondary)" }}>
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
            pagination={{ clickable: true, dynamicBullets: true, el: ".custom-pagination" }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 5 },
            }}
            className="!overflow-visible"
          >
            {interests.map((interest, index) => (
              <SwiperSlide key={index}>
                <InterestCard interest={interest} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-10 flex justify-center lg:hidden" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -z-10 -translate-x-1/2 select-none text-[8rem] font-black lg:text-[12rem]" style={{ color: "var(--card-overlay-text)" }}>
        PASSIONS
      </div>

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background: var(--text-muted);
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #ef4444 !important;
          width: 20px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Interests;
