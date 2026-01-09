import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Tabs } from "@/components/Tabs";
import { About } from "@/components/About"; // Pode deixar o import aqui, não atrapalha
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Tabs />
      
      {/* COMENTEI AQUI PARA ESCONDER
         Se ela pagar, é só apagar os sinais de { /* e * / } 
      */}
      {/* <About /> */}
      
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;