import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import PreviewShow_one from "@/src/components/PreviewShow_one";

 export const metadata = {
  title: "Preview Show 2024 - Massart",
  description: "Welcome to the preview show 2024 of Massart.",
};

const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <PreviewShow_one />
      <Footer />
    </div>
  );
};

export default page;
