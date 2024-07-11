import TwoZeroTwoThree from "@/src/components/2023";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

 export const metadata = {
  title: "2023 - Massart",
  description: "Welcome to the 2023 of Massart.",
};
const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <TwoZeroTwoThree/>
      <Footer />
    </div>
  );
};

export default page;
