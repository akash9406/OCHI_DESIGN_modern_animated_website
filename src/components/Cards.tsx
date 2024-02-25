import { useEffect, useState } from "react";

function Cards() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e): void => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //converting radians to degree (180/math.PI) = 57.29
      setRotate(angle - 180);
    });
  });
  return (
    <div className="flex flex-col relative">
      <div className="w-full h-[100vh] flex px-10 border-t-[1px] border-zinc-400 gap-10 pt-[20vh] sticky top-[-90px] ">
        <div className="cardcontainer sticky top-10 w-1/2 h-[55vh] rounded-2xl bg-[#004D43] grid place-content-center   ">
          <img className=" scale-150" src="/logo001.svg" alt="logo1" />
        </div>
        <div className="cardcontainer w-1/2 h-[55vh] gap-5 flex sticky top-10 ">
          <div className="w-1/2 rounded-2xl h-full grid place-content-center bg-[#212121]">
            <img src="/logo002.svg" alt="logo2" />
          </div>
          <div className="w-1/2 rounded-2xl h-full grid place-content-center bg-[#212121]">
            <img src="/logo003.png" alt="logo3" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#CDEA68] h-screen rounded-t-2xl z-[100] flex flex-col text-[10vw] tracking-tighter leading-none font-bold justify-center items-center relative ">
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>THE PROJECT</h1>
        <a
          className=" bg-zinc-900 hover:bg-zinc-950 h-[7vh] w-[12vw] tracking-normal top-[90%] rounded-3xl text-[2vh]  pt-2 px-1 font-semibold  text-white flex items-center justify-center "
          href="#"
        >
          <h1>START THE PROJECT</h1>
        </a>
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3  bg-black rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-10 h-10  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full  flex items-center justify-center">
            <div className="w-2/3 h-2/3  bg-black rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-10 h-10  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
