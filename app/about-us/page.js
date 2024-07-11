import AboutUs from "@/src/components/AboutUs";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import Head from "next/head";

 export const metadata = {
  title: "About Us - Massart",
  description: "Welcome to the about us of Massart.",
};

const page = () => {
  return (
    <>
       <Head>
        <title>About Us - {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
      </Head>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default page;
