import Image from "next/image";
import Navbar from "./components/navbar";
import LandingBanner from "./components/landingBanner";
import Testimonials from "./components/testimonial";
import BeforeAfter from "./components/beforeAfter";
import Footer from "./components/footer";

export default function Home() {
  return (
            <div className="">
            <Navbar/>
            <LandingBanner/>
            <Testimonials/>
            <BeforeAfter/>
            <Footer/>
        </div>
  );
}
