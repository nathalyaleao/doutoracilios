import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const tabsData = {
  cilios: {
    title: "Cílios",
    services: [
      {
        name: "Extensão Clássica",
        duration: "2h",
        price: "R$ 180",
        features: ["Fios fio a fio", "Durabilidade de 4 semanas", "Manutenção inclusa"],
      },
      {
        name: "Volume Russo",
        duration: "2h30",
        price: "R$ 250",
        features: ["Volume 3D a 6D", "Efeito dramático", "Ideal para eventos"],
      },
      {
        name: "Lash Lifting",
        duration: "1h",
        price: "R$ 120",
        features: ["Curvatura natural", "Durabilidade 8 semanas", "Inclui tintura"],
      },
    ],
  },
  sobrancelhas: {
    title: "Sobrancelhas",
    services: [
      {
        name: "Design com Henna",
        duration: "45min",
        price: "R$ 70",
        features: ["Harmonização facial", "Coloração natural", "Durabilidade 15 dias"],
      },
      {
        name: "Micropigmentação",
        duration: "3h",
        price: "R$ 450",
        features: ["Técnica fio a fio", "Resultado natural", "Retoque incluso"],
      },
      {
        name: "Brow Lamination",
        duration: "1h",
        price: "R$ 150",
        features: ["Efeito penteado", "Durabilidade 6 semanas", "Fios alinhados"],
      },
    ],
  },
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<"cilios" | "sobrancelhas">("cilios");

  const getWhatsappLink = (serviceName: string) => {
    const text = `Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20servi%C3%A7o%20de%20${encodeURIComponent(serviceName)}.`;
    return `https://wa.me/5592994152566?text=${text}`;
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6 cursor-default border border-primary/20"
          >
            <Star size={14} fill="currentColor" className="animate-pulse" />
            <span>Investimento na sua auto-estima</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Escolha sua experiência
          </motion.h2>

          <div className="inline-flex p-2 bg-gray-50 rounded-full relative border border-gray-200">
            {(["cilios", "sobrancelhas"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${
                  activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/30"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                {tab === "cilios" ? "Cílios" : "Sobrancelhas"}
              </button>
            ))}
          </div>
        </div>

        {/* CONTEÚDO DOS CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-3 gap-8"
          >
            {tabsData[activeTab].services.map((service, index) => {
              // FORÇA BRUTA: Se for par, -100px (esquerda). Se for ímpar, 100px (direita).
              const xOffset = index % 2 === 0 ? -100 : 100;

              return (
                <motion.div
                  key={service.name}
                  // --- CONFIGURAÇÃO DA ANIMAÇÃO ZIG-ZAG ---
                  initial={{ opacity: 0, x: xOffset }} 
                  whileInView={{ opacity: 1, x: 0 }} // Garante que só anima quando você vê
                  viewport={{ once: true, margin: "-50px" }} // Espera o elemento entrar um pouquinho
                  transition={{
                    type: "spring",
                    stiffness: 50, // Mais lento e fluido
                    damping: 20,
                    duration: 1.0, // Duração de 1 segundo para você ver bem
                    delay: index * 0.2, // Um pouco mais de atraso entre um e outro
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  // ----------------------------------------
                  className="relative bg-white rounded-[2rem] p-8 border-2 border-primary/30 shadow-sm hover:border-primary hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between transition-colors duration-300"
                >
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                        {service.duration}
                      </span>
                      <div className="mt-4 flex items-center justify-center text-gray-900">
                        <span className="text-4xl font-heading font-bold">{service.price}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mt-2">
                        {service.name}
                      </h3>
                    </div>

                    <div className="w-full h-px bg-gray-100 my-6" />

                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                          <div className="mt-0.5 p-0.5 rounded-full bg-primary/10 text-primary">
                            <Check size={12} strokeWidth={4} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a 
                    href={getWhatsappLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-lg bg-primary text-white shadow-primary/25 hover:bg-primary/90"
                  >
                    Agendar Horário
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};