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
        <div className="hero h-full w-full grid sm:grid-cols-2 gap-3 grid-cols-1">
          <div className="leftside flex flex-col justify-center items-center ">
          <div className="absolute mt-[100px] px-10">
            <p className="text-white text-sm lg:text-lg">Embarking on an adventurous road trip from city to coast. Scenic landscapes, spontaneous detours, and laughter-filled pit stops. Fueling memories, capturing sunsets.</p>
            <div className="flex">
                            <Button classes="p-3 md:py-3 md:px-6 flex gap-3 bg-green-700 rounded-sm md:mt-4"> <div className="text-xs md:text-lg"> Become Our Partner</div> <HiArrowRight /></Button> 
                            </div>
            </div>
            <div className="">
            <VerticalSlider/>
            </div>
          </div>
          <div className="hidden rightside sm:flex sm:justify-center sm:items-center">
            <HomeSlider/>
          </div>
        </div>
    </main>
  );
}
