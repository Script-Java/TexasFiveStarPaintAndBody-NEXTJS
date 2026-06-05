import Link from "next/link";
import {
  FiMapPin,
  FiArrowRight,
  FiPhone,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";
import { locations } from "@/data/locations";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Areas We Serve | Auto Body Repair Near You | Texas Five Star Paint & Body",
  description:
    "Texas Five Star Paint & Body serves 12 cities across the DFW metroplex. Find expert collision repair, custom paint, dent repair & more near Garland, Richardson, Mesquite, Plano, Dallas & beyond.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Areas We Serve | Texas Five Star Paint & Body",
    description:
      "Expert auto body services across 12 DFW cities. Find your city and explore our services.",
    url: "/locations",
  },
};

export default function LocationsHub() {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-gray-500 flex items-center gap-2 flex-wrap mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Areas We Serve</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 font-semibold uppercase tracking-wider text-sm px-4 py-2 rounded-full mb-6">
                <FiMapPin size={16} />
                Areas We Serve
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
                Premium Auto Body Services Across the DFW Metroplex
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Our Garland shop is a short drive from 12 DFW cities. Pick your area to see
                services, drive times, and directions.
              </p>
            </div>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-red-600/40 transition-all duration-300 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-red-600/10 p-3 rounded-xl group-hover:bg-red-600 transition-all duration-300">
                      <FiMapPin
                        className="text-red-500 group-hover:text-white transition-colors"
                        size={22}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                      <FiClock size={12} />
                      <span>{loc.driveTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                    {loc.name}, TX
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {loc.county} &bull; Pop. {loc.population}
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    View Services
                    <FiArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Don&apos;t See Your City?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              We welcome customers from across the DFW metroplex. Give us a call and we&apos;ll be happy to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:4695837377"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
              >
                <FiPhone />
                (469) 583-7377
              </a>
              <a
                href="https://maps.app.goo.gl/P4kbxw5D3ktNxKi59"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-8 py-4 text-white/90 hover:text-white hover:border-white/30 transition text-lg"
              >
                Get Directions
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
