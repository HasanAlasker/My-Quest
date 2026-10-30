import Footer from "@/components/general/Footer";
import UserNav from "@/components/general/UserNav";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div>
      <UserNav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
