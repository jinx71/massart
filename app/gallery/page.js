import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import Gallery from "@/src/components/Gallery";

 export const metadata = {
  title: "Gallery - Massart",
  description: "Welcome to the gallery of Massart.",
};

const page = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default page;
