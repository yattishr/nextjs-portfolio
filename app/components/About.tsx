import * as motion from "motion/react-client";

function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col items-center md:flex-row md:space-x-10">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
          </h3>
          <motion.img
            src="https://images.unsplash.com/photo-1748190728356-e8e06e021640?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          />
          <div className="space-y-10 px-0 md:px-10 md:mt-10">
            <h4 className="text-4xl font-semibold md:pt-0">
              Here is a{" "}
              <span className="underline decoration-purple-400">little</span>{" "}
              background
            </h4>
            <p className="text-base mt-2">
              Hello! I am{" "}
              <span className="text-purple-300 font-semibold font-stretch-expanded">
                Yattish
              </span>
              , a software engineer with a passion for building scalable web
              applications and exploring new technologies. My journey in tech
              has been driven by curiosity and a desire to create impactful
              solutions.
            </p>
            <p className="text-base mt-2">
              I enjoy collaborating with teams, learning from challenges, and
              continuously improving my skills. Let's connect and explore how we
              can work together to bring innovative ideas to life!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
