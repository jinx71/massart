import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import Concept from "@/src/components/Concept";
 export const metadata = {
  title: "Concept - Massart",
  description: "Welcome to the concept of Massart.",
};
const page = () => {
  return (
    <>
      <Header />
      <Concept />
      <Footer />
    </>
  );
};

export default page;
