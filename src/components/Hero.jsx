import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Linkedin Photo.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pdf from "../assets/Jackson Bryant Resume 2024.pdf";

// Framer Motion Animation Function
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" id="home">
      <div className="flex flex-nowrap max-sm:flex-wrap">
        <div className="w-full lg:w-1/2 mt-60 max-sm:mt-20">
          <div className="flex flex-col items-center lg:items-start max-lg:items-start max-sm:items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl max-sm:w-96 max-sm:text-center"
            >
            Jackson Bryant
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-yellow-300 via-emerald-500 to-accent bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className=" bg-slate-800 h-20 w-48 text-center rounded-xl hover:bg-slate-500"
            >
              <a href={pdf} download="Jackson Bryant Resume 2024.pdf">
                Download Resume
              </a>
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-60 max-sm:mt-0">
          <div className="flex justify-center max-lg:mt-20 max-lg:mx-5">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Jackson Bryant"
              className="max-sm:hidden rounded-md"
            />
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="m-8 flex flex-col gap-4 text-2xl justify-center pb-24 max-sm:pb-0 max-sm:mx-auto max-sm:flex-row max-sm:-mt-64 max-lg:mx-0"
        >
          <a
            href="https://www.linkedin.com/in/jacksonbryant2005/"
            className="hover:text-gray-600 mt-60 max-sm:mt-60"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JacksonBryantFGCU"
            className="hover:text-gray-600 hover:shadow-custom max-sm:mt-60"
            target="_blank"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
