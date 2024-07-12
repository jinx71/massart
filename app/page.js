import Explore from "@/src/components/Explore";
import Gallery from "@/src/components/Gallery";
import MasterClass from "@/src/components/MasterClass";
import Review from "@/src/components/Review";

import Footer from "@/src/components/common/Footer";
import HeaderHome from "@/src/components/common/HeaderHome";
import Concept from "@/src/components/Concept";
import EventPartener from "@/src/components/EventPartner";
import GuidanceHeading from "@/src/components/GuidanceHeading";
import GuidenceStep from "@/src/components/GuidenceStep";
import HomeAboutUs from "@/src/components/HomeAboutUs";
import HomeVideo from "@/src/components/HomeVideo";
import Visual from "@/src/components/Visuals";

export const metadata = {
  title: "Home - massert",
  description: "Welcome to the home of Massart.",
};

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HeaderHome />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <HomeAboutUs />
          <Visual />
          <Gallery />
          <Concept />
          <HomeVideo />
          <Explore />
          <MasterClass />
        </div>
        <EventPartener />
        <Review />
        <GuidanceHeading />
        <GuidenceStep />
      </main>
      <Footer />
    </div>
  );
}
