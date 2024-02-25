const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="bg-[#CCE968] w-full h-[120vh] flex flex-col rounded-t-2xl font-['Neue Montreal'] "
    >
      <div className=" border-b-[1px] mb-[9vh] border-[#99AD53]">
        <p className="text-[3.4vw] ml-[7vw] mt-[5vw] tracking-tight md:leading-[7vh] sm:leading-[5vh] pb-[6vh]   ">
          Ochi is a strategic partner for fast-growing tech <br /> businesses
          that need to
          <u> raise funds</u>,<u> sell products</u>,<br />{" "}
          <u>explain complex</u> ideas, and <u>hire great people</u>.
        </p>
      </div>
      <div className="flex  justify-between px-[4vw] ">
        <div>
          <p className="my-[10vh] text-6xl">Our approach:</p>
          <a className=" px-8 py-5  bg-black rounded-full text-white">
            READ MORE
          </a>
        </div>
        <div>
          <img className="rounded-2xl" src="/Homepage.jpg" alt="homepage" />
        </div>
      </div>
    </div>
  );
};

export default About;
