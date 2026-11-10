import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Leadership from "@/components/Leadership";
import Advantage from "@/components/Advantage";
import GlobalPresence from "@/components/GlobalPresence";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Leadership />
      <Advantage />
      <GlobalPresence />
      <ContactForm />
    </>
  );
}
