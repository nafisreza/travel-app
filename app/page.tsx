import Navbar from "./_home/home-navbar";
import BG from '../assets/images/home/bg-home.png'
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-home+ min-h-screen relative">
      <Image src={BG} alt="background" layout="fill" objectFit="cover" className="absoute w-full left-0 top-0" />
      <div className="relative">
        <Navbar />
      </div>
    </main>
  )
}
