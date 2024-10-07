import CallToAction from "@/components/CallToAction";
import Facts from "@/components/Facts";
import FAQ from "@/components/FAQ";
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
      <FAQ />
    </main>
  );
}
