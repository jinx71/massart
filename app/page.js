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
import Video from "@/src/components/Video";
import Visual from "@/src/components/Visuals";
import HomeVideo from "@/src/components/HomeVideo";

export const metadata = {
  title: "Home - Massart",
  description: "Welcome to the home of Massart.",
};

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HeaderHome />
      <main>
        <HomeAboutUs />
        <Visual />
        <Gallery />
        <Concept />
        <HomeVideo />
        <Explore />
        <MasterClass />
        <EventPartener />
        <Review />
        <GuidanceHeading />
        <GuidenceStep />
      </main>
      <Footer />
    </div>
  );
}
