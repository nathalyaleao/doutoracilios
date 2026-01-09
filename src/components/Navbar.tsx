import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORTANTE: Certifique-se de que sua imagem "logo.png" esteja na pasta "public" do projeto.
const logoImage = "/logo.png"; 

const navLinks = [
  { name: "Serviços", href: "#servicos" },
  { name: "Planos", href: "#planos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Blog", href: "#blog" },
  { name: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" // Visual quando rola a página
          : "bg-transparent py-5" // Visual no topo
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* --- LOGO (IMAGEM) --- */}
        <a href="#" className="flex-shrink-0 relative z-10">
          <img 
            src={logoImage} 
            alt="Cilios e Cia Studio" 
            // Ajuste o h-14 se quiser maior ou menor. w-auto mantém a proporção.
            className={`h-14 w-auto object-contain transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}
          />
        </a>

        {/* LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-gray-700 hover:text-primary transition-colors relative group"
            >
              {link.name}
              {/* Efeito de sublinhado dourado ao passar o mouse */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* BOTÃO DE AGENDAR (Desktop) */}
        <div className="hidden md:block relative z-10">
          <a
            href="https://wa.me/5592994152566?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            Agendar Agora
            <ArrowRight size={16} />
          </a>
        </div>

        {/* BOTÃO MENU (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-gray-900"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-lg font-bold text-gray-900">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5592994152566?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2"
              >
                Agendar Agora
                <ArrowRight size={20} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};