import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AlexChat from "@/components/alex/AlexChat";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Services />
      <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="text-white">Beszélj </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Alex-szel
              </span>
            </h2>
            <p className="mx-auto max-w-2xl px-4 text-lg text-gray-400 sm:text-xl">
              Az AI asszisztensünk válaszol kérdéseidre és segít a projekt indításában
            </p>
          </div>
          <AlexChat />
        </div>
      </section>
      <TechStack />
      <Portfolio />
      <Stats />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
