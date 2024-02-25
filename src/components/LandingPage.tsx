import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => (
  <div
    data-scroll
    data-scroll-section
    data-scroll-speed="-0.5"
    className="w-full h-screen  bg-[#F1F1F1]  pt-1"
  >
    <div className="textstructure mt-52 px-20  ">
      {["We Create", "Eye opening", "Presentations"].map((item, index) => {
        return (
          <div className="masker  ">
            <div className="w-fit flex items-end overflow-hidden pr-3">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[8vw]  rounded-md h-[5vw] bg-[#CCE968] relative -top-1"
                ></motion.div>
              )}
              <h1 className="font-bold uppercase text-[7.5vw]  font-['Founders Grotesk X-Cond']  leading-[6.4vw] tracking-tighter ">
                {item}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
    <div className="border-t-[1px] border-zinc-400  flex justify-between items-center py-5 px-20 mt-20 ">
      {["For public and private companies", "From the first pitch to IPO"].map(
        (item) => (
          <p className="text-md tracking-tight leading-none font-light">
            {item}
          </p>
        )
      )}
      <div className="start flex items-center gap-5">
        <div className="px-4 py-2 border-[1px]  border-zinc-700  rounded-full font-light text-md uppercase">
          start the project
        </div>
        <div className="w-10 h-10 border-[1px]  border-zinc-700  rounded-full flex items-center justify-center">
          <span className="rotate-[45deg]">
            <FaArrowUpLong />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
