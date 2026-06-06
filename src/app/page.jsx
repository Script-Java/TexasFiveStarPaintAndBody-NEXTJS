import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "./components/navbar";
import LandingBanner from "./components/landingBanner";
import Footer from "./components/footer";

const Testimonials = dynamic(() => import("./components/testimonial"), { ssr: true });
const BeforeAfter = dynamic(() => import("./components/beforeAfter"), { ssr: true });

export const metadata = {
  title: 'Auto Body Shop in Garland, TX | Texas Five Star Paint & Body',
  description: 'Texas Five Star Paint & Body offers professional collision repair, custom paint jobs, paintless dent repair, and auto restoration in Garland, TX. Call (469) 583-7377.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Auto Body Shop in Garland, TX | Texas Five Star Paint & Body',
    description: 'Professional collision repair, custom paint, PDR, and auto restoration in Garland, TX.',
    url: '/',
    type: 'website',
  },
};

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
