import About from "./components/About";
import Eye from "./components/Eye";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-zinc-950  bg-[#F1F1F1] ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Features />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
