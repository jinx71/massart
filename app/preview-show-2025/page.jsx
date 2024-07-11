import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import PreviewShow_two from "@/src/components/PreviewShow_two";

 export const metadata = {
  title: "Preview Show 2025 - Massart",
  description: "Welcome to the preview show 2025 of Massart.",
};

const page = () => {
 
  return (
    <div className="bg-white">
      <Header />
      <PreviewShow_two />
      <Footer />
    </div>
  );
};

export default page;
