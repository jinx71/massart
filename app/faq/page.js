import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import GuidanceHeading from "@/src/components/GuidanceHeading";

 export const metadata = {
  title: "FAQ's - Massart",
  description: "Welcome to the faq's of Massart.",
};

const page = () => {
 
  return (
    <div className="bg-white">
      <Header />
     <GuidanceHeading />
      <Footer />
    </div>
  );
};

export default page;
