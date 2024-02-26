import Navbar from "./_home/home-navbar";
import BG from "../assets/images/home/bg-home.png";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import { HiArrowRight } from "react-icons/hi";
import HomeSlider from '@/components/swiper/home-slider/HomeSlider'
import VerticalSlider from "@/components/swiper/vertical-slider/VerticalSlider";

export default function Home() {
  return (
    <main className="m-h-screen"  style={{
      backgroundImage: `url("../assets/images/home/bg-home.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
        <Navbar />
        <div className="hero h-full w-full grid grid-cols-2 gap-3">
          <div className="leftside ml-16 ">
          <div className="absolute w-[500px] mt-[230px] z-10">
            <p className="text-white">Embarking on an adventurous road trip from city to coast. Scenic landscapes, spontaneous detours, and laughter-filled pit stops. Fueling memories, capturing sunsets.</p>
            <Button classes="py-3 px-6 flex gap-3 bg-green-700 rounded-sm">Become Our Partner <div><HiArrowRight /></div> </Button> 
            </div>
            <VerticalSlider/>
          </div>
          <div className="rightside">
            <HomeSlider/>
          </div>
        </div>
    </main>
  );
}
