import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(220,38,38,0.03)" }} />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(220,38,38,0.03)" }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
              Selected Works
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: "var(--text-primary)" }}>
            Architecting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              Digital Solutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            A curated selection of high-performance applications, bridging the gap
            between complex engineering and intuitive user experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-b from-red-500/20 to-transparent opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border backdrop-blur-3xl transition-colors duration-500"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className="rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-red-500" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed font-medium" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2.5 py-1 text-[10px] font-semibold border transition-colors duration-300 group-hover:border-red-500/30 group-hover:text-red-400"
                        style={{
                          background: "var(--tech-badge-bg)",
                          borderColor: "var(--tech-badge-border)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold transition-all duration-300 hover:border-red-500/50"
                        style={{
                          borderColor: "var(--border-color)",
                          background: "var(--social-bg)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <FaGithub size={16} />
                        Source
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-500 hover:-translate-y-0.5"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-32 w-full pointer-events-none"
        style={{ background: `linear-gradient(to top, var(--bg-primary), transparent)` }}
      />
    </section>
  );
};

export default Projects;
