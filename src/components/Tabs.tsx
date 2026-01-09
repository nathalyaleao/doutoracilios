import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";

// --- DADOS NOVOS (DOUTORA CÍLIOS) ---
const tabsData = {
  extensoes: {
    title: "Extensões & Volumes",
    services: [
      {
        name: "Clássico Fio a Fio",
        duration: "2h",
        price: "A partir de R$ 150",
        features: ["Efeito Rímel Natural", "1 fio sintético por fio natural", "Leveza total"],
      },
      {
        name: "Volume Russo",
        duration: "2h30",
        price: "A partir de R$ 220",
        features: ["Leques artesanais (Fans)", "Preenchimento total", "Olhar marcante"],
      },
      {
        name: "Volume Brasileiro",
        duration: "2h",
        price: "A partir de R$ 190",
        features: ["Retenção superior", "Fios tecnológicos em Y", "Queridinho do momento"],
      },
    ],
  },
  efeitos: {
    title: "Efeitos Exclusivos",
    services: [
      {
        name: "Efeito Molhado",
        duration: "2h",
        price: "Sob Consulta",
        features: ["Visual 'saí do banho'", "Fios fechados com brilho", "Tendência global"],
      },
      {
        name: "Fox Eyes",
        duration: "2h30",
        price: "Sob Consulta",
        features: ["Alongamento no canto externo", "Efeito delineado gatinho", "Sensualidade"],
      },
      {
        name: "Efeito Sirena",
        duration: "2h15",
        price: "Sob Consulta",
        features: ["Textura irregular", "Efeito Sereia despojado", "Disponível em Brown"],
      },
    ],
  },
  sobrancelhas: {
    title: "Sobrancelhas & Cursos",
    services: [
      {
        name: "Brow Lamination",
        duration: "1h",
        price: "R$ 150",
        features: ["Alinhamento dos fios", "Volume natural e nutrido", "Dura até 6 semanas"],
      },
      {
        name: "Lash Lifting",
        duration: "1h",
        price: "R$ 120",
        features: ["Curvatura do próprio cílio", "Tratamento com vitaminas", "Sem manutenção"],
      },
      {
        name: "Design com Henna",
        duration: "45min",
        price: "R$ 70",
        features: ["Design personalizado", "Aplicação de Henna Ombré", "Durabilidade média 10 dias"],
      },
    ],
  },
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabsData>("extensoes");

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-primary text-sm font-bold tracking-wide mb-6 cursor-default border border-primary/20"
          >
            <Star size={14} fill="currentColor" className="animate-pulse" />
            <span>Tabela de Investimento</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Escolha sua transformação
          </motion.h2>

          {/* MENU ESTILO PÍLULA (Igual à foto 1.png) */}
          <div className="inline-flex flex-col md:flex-row p-2 bg-white rounded-[2.5rem] relative border border-gray-100 shadow-xl shadow-gray-100/50 mx-auto min-w-[300px] md:min-w-0">
            {(Object.keys(tabsData) as Array<keyof typeof tabsData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-4 md:py-3 rounded-[2rem] text-sm font-bold transition-colors duration-300 z-10 whitespace-nowrap ${
                  activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-[2rem] -z-10 shadow-lg shadow-primary/30"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                {tabsData[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* CONTEÚDO DOS CARDS (Animação Original Mantida) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {tabsData[activeTab].services.map((service, index) => {
              // --- SUA LÓGICA DE ANIMAÇÃO ORIGINAL ---
              const xOffset = index % 2 === 0 ? -100 : 100;

              return (
                <motion.div
                  key={service.name}
                  // Props Exatas do seu código antigo
                  initial={{ opacity: 0, x: xOffset }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 1.0,
                    delay: index * 0.2,
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  // Layout atualizado (Visual)
                  className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between transition-colors duration-300"
                >
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10 inline-flex items-center gap-1">
                        <Sparkles size={10} />
                        {service.duration}
                      </span>
                      <div className="mt-4 flex items-center justify-center text-primary">
                        <span className="text-3xl font-heading font-bold">{service.price}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">
                        {service.name}
                      </h3>
                    </div>

                    <div className="w-full h-px bg-gray-100 my-6" />

                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                          <div className="mt-0.5 p-0.5 rounded-full bg-secondary text-primary">
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
                    whileHover={{ scale: 1.02 }} 
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