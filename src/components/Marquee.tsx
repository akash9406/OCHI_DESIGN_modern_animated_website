import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-sections
      data-scroll-speed=".1"
      className="w-full py-20  h-screen bg-[#004D43] rounded-t-2xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-400  overflow-hidden flex whitespace-nowrap mt-16 \">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[21vw] tracking-tighter leading-none font-['Founders Grotesk X-Cond'] uppercase font-bold text-white -mb-10 -mt-11 pr-20 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[21vw] tracking-tighter leading-none font-['Founders Grotesk X-Cond'] uppercase font-bold text-white -mb-5 -mt-11 pr-20 "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
