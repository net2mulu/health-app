import CallToAction from "@/components/landing/home/CallToAction";
import Facts from "@/components/landing/home/Facts";
import PricingModel from "@/components/landing/home/PricingModel";
import Hero from "@/components/landing/home/Hero";
import Solutions from "@/components/landing/home/Solutions";
import Testimonials from "@/components/landing/home/Testimonials";
import FAQ from "@/components/landing/home/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Facts />
      <CallToAction />
      <Testimonials />
      <PricingModel />
      <FAQ />
    </main>
  );
}
