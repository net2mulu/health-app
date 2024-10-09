import CallToAction from "@/components/CallToAction";
import Facts from "@/components/Facts";
import PricingModel from "@/components/PricingModel";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Facts />
      <CallToAction />
      <Testimonials />
      <PricingModel />
      {/* <FAQ /> */}
    </main>
  );
}
