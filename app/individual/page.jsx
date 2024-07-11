import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import Individual from "@/src/components/Individual";

 export const metadata = {
  title: "Individual - Massart",
  description: "Welcome to the individual of Massart.",
};

const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <Individual />
      <Footer />
    </div>
  );
};

export default page;
