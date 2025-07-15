import { SocialIcon } from "react-social-icons";
import * as motion from "motion/react-client";

function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-row items-center">
          <SocialIcon network="github" fgColor="gray" bgColor="transparent" />
          <SocialIcon
            url="https://x.com"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://medium.com"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://linkedin.com"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0.5, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div>
      </motion.div>

    </header>
  );
}

export default Header;
