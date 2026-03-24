import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";
import StyleSelector from "@/sections/StyleSelector";
import Gallery from "@/sections/Gallery";
import HowItWorks from "@/sections/HowItWorks";
import InfoSection from "@/sections/InfoSection";
import Booking from "@/sections/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero scrollToId="booking" />
        <Trust />
        <StyleSelector />
        <Gallery />
        <HowItWorks />
        <InfoSection />
        <Booking />
      </main>
      <Footer />
    </>
  );
}