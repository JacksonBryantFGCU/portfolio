import aboutImg from "../assets/about-me.jpg";
import { ABOUT_TEXT } from "../constants";
import { ABOUT_TEXT1 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 scroll-mt-48" id="about">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-1/4" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-row justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6 text-xl">{ABOUT_TEXT}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 2 }}
          >
            <p className="my-2 max-w-xl py-6 text-xl">{ABOUT_TEXT1}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
