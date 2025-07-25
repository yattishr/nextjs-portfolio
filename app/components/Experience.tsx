import * as motion from "motion/react-client";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div>
        <div><ExperienceCard /></div>
        <div><ExperienceCard /></div>
        <div><ExperienceCard /></div>
      </div>
    </motion.div>
  );
}

export default Experience;
