import Navbar from "./_home/home-navbar";
import BG from "../assets/images/home/bg-home.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative"  style={{
      backgroundImage: `url("../assets/images/home/bg-home.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
        <Navbar />

    </main>
  );
}
