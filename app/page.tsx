import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Trust />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
