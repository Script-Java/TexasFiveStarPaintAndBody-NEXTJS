import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FreeEstimateForm from "./FreeEstimateForm";

export const metadata = {
  title: "Free Estimate | Get a No-Obligation Quote",
  description:
    "Request a free, no-obligation estimate from Texas Five Star Paint & Body. Collision repair, custom paint, dent repair, auto restoration & more in Garland, TX. Up to $500 deductible forgiveness.",
  alternates: { canonical: "/free-estimate" },
  openGraph: {
    title: "Free Estimate | Texas Five Star Paint & Body",
    description:
      "Get a free, no-obligation estimate for collision repair, custom paint, and more. Family-owned with a perfect 5-star Google rating in Garland, TX.",
    url: "/free-estimate",
    type: "website",
  },
};

export default function FreeEstimatePage() {
  return (
    <div>
      <Navbar />
      <FreeEstimateForm />
      <Footer />
    </div>
  );
}
