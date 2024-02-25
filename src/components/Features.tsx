const Features = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-20">
        <h1 className="text-6xl font-['Neue Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="cards flex gap-8 mt-[8vh] px-10 ">
        <div className="cardcontainer w-1/2 h-[80vh] relative  group">
          <h1
            className="absolute leading-none tracking-tighter  
           -translate-x-1/2 overflow-hidden top-1/2 -translate-y-1/2
           z-[9] left-full flex text-8xl text-[#CCE968]
           font-semibold"
          >
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.03s]  duration-500 `}
            >
              F
            </span>
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.06s]  duration-500 `}
            >
              Y
            </span>
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.12s]  duration-500 `}
            >
              D
            </span>
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.18s]  duration-500 `}
            >
              E
            </span>
          </h1>
          <div className="group-hover:scale-90 w-full h-full  rounded-xl duration-300 mb-10 overflow-hidden">
            <img
              className="w-full h-full bg-cover rounded-xl group-hover:scale-[120%]
              delay-300 duration-[300ms] ease-in-out"
              src="/Fyde_Illustration_Crypto.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardcontainer w-1/2 h-[80vh]  group relative">
          <h1
            className="absolute leading-none tracking-tighter  
           translate-x-1/2 overflow-hidden top-1/2 -translate-y-1/2
           z-[9] right-full flex text-8xl text-[#CCE968]
           font-semibold"
          >
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.03s]  duration-500 `}
            >
              V
            </span>
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.06s]  duration-500 `}
            >
              I
            </span>
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.12s]  duration-500 `}
            >
              S
            </span>
            <span
              className={`inline-block translate-y-[100%] group-hover:translate-y-0 transition-all  delay-[0.18s]  duration-500 `}
            >
              E
            </span>
          </h1>
          <div className="group-hover:scale-90 w-full h-full  rounded-xl duration-300 overflow-hidden">
            <img
              className="w-full h-full bg-cover rounded-xl group-hover:scale-[120%]
              delay-300 duration-[300ms] ease-in-out"
              src="/Vise_front.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

/*import { motion } from "framer-motion";
import { Power4 } from "gsap";
import { useState } from "react";

const Features = () => {
  const [hovering, setHovering] = useState<Boolean>(false);
  const [hovering2, setHovering2] = useState<Boolean>(false);
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-20">
        <h1 className="text-6xl font-['Neue Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="cards flex gap-8 mt-[8vh] px-10 ">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="cardcontainer w-1/2 h-[80vh] relative  group"
        >
          <h1
            className="absolute leading-none tracking-tighter  
           -translate-x-1/2 overflow-hidden top-1/2 -translate-y-1/2
           z-[9] left-full flex text-8xl text-[#CCE968]
           font-semibold"
          >
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block "
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="group-hover:scale-90 w-full h-full  rounded-xl duration-300 mb-10 overflow-hidden">
            <img
              className="w-full h-full bg-cover rounded-xl group-hover:scale-[120%]
              delay-300 duration-[300ms] ease-in-out"
              src="/Fyde_Illustration_Crypto.png"
              alt=""
            />
          </div>
        </div>
        <div
          onMouseEnter={() => setHovering2(true)}
          onMouseLeave={() => setHovering2(false)}
          className="cardcontainer w-1/2 h-[80vh]  group relative"
        >
          <h1
            className="absolute leading-none tracking-tighter  
           translate-x-1/2  top-1/2 -translate-y-1/2
           z-[9] right-full flex overflow-hidden text-8xl text-[#CCE968]
           font-semibold"
          >
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={hovering2 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block "
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="group-hover:scale-90 w-full h-full  rounded-xl duration-300 overflow-hidden">
            <img
              className="w-full h-full bg-cover rounded-xl group-hover:scale-[120%]
              delay-300 duration-[300ms] ease-in-out"
              src="/Vise_front.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
 */
