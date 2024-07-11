
import ContemporaryBggreenGrid from '@/src/components/Contemporay/PhoneGrid/ContemporaryBigscreenGrid';
import ContemporaryPhoneGrid from '@/src/components/Contemporay/PhoneGrid/ContemporayPhoneGrid';
import Footer from '@/src/components/common/Footer';
import Header from '@/src/components/common/Header';

 export const metadata = {
  title: "Contemporary - Massart",
  description: "Welcome to the contemporary of Massart.",
};
const Contemporary = () => {
    return (
        <div className="">
            <Header />
            <main className="font-helvetica overflow-hidden max-w-[1440px] m-auto">
                <div className="text-[#FFFFFF] text-xs grid grid-cols-2 ml-8 mr-8 gap-[10px] mt-[60px] mb-[60px] md:hidden">
                    <ContemporaryPhoneGrid />
                  
                </div>
                <div className="ml-[120px] mr-[120px] text-base font-bold  grid-cols-3 gap-5 mt-[152px] mb-[152px] hidden md:grid">
                    <ContemporaryBggreenGrid />
                    <ContemporaryBggreenGrid />
                    <ContemporaryBggreenGrid />
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default Contemporary;