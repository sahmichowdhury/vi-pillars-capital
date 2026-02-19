import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Values from "@/components/Values";
import Pipeline from "@/components/Pipeline";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Values />
      <Pipeline />
      <Team />
      <Contact />
    </div>
  );
}
