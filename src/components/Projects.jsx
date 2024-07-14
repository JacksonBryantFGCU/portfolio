import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="border-b border-neutral-900 pb-4 scroll-mt-48"
      id="projects"
    >
      {/* Projects Header */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      {/* Projects Text and Images */}
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={200}
                height={250}
                alt={project.title}
                className="mb-6 rounded hover:scale-150"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
                <a href={project.demo} target="_blank" className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-400 hover:text-purple-900 max-sm:text-nowrap max-sm:text-xs">View Project</a>
                <a href={project.github} target="_blank" className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-400 hover:text-purple-900 max-sm:text-nowrap max-sm:text-xs">View Github</a>
              {project.skills.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 max-sm:text-wrap max-sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
