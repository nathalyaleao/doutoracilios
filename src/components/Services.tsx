import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Extensão de Cílios",
    description: "Fios clássicos ou volume russo para um olhar natural ou dramático.",
    image: "/extensao-cilios.jpg"
  },
  {
    title: "Lash Lifting",
    description: "Curvatura natural dos seus cílios com durabilidade de até 8 semanas.",
    image: "/lash-lafintg.jpeg"
  },
  {
    title: "Design de Sobrancelhas",
    description: "Harmonização facial com técnicas de precisão e naturalidade.",
    image: "/designer-sobrancelha.jpg"
  },
  {
    title: "Micropigmentação",
    description: "Sobrancelhas fio a fio ou esfumadas para um resultado duradouro.",
    image: "/micropgmentacao.jpg"
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6"
          >
            <Sparkles size={14} fill="currentColor" />
            <span>Nossos Procedimentos</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Transforme seu olhar
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Técnicas exclusivas para realçar a beleza natural dos seus olhos, com o cuidado que você merece.
          </motion.p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              // --- AQUI ESTÁ O "TCHAN SUAVE" ---
              initial={{ opacity: 0, y: 80, scale: 0.9 }} // Começa um pouco menos exagerado
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Cresce e sobe
              viewport={{ once: true, margin: "-15%" }} // Espera entrar um pouco mais na tela para não cortar o efeito
              transition={{ 
                type: "spring", // Física de mola
                stiffness: 120, // Tensão da mola (menor = mais suave)
                damping: 20,   // Fricção (maior = menos "quique", freia mais)
                mass: 1.2      // Peso (maior = movimento mais assentado e elegante)
              }} 
              // ---------------------------
              className="group cursor-pointer"
            >
              {/* CARTÃO DA IMAGEM */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 bg-gray-200 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 z-10 pointer-events-none group-hover:bg-black/0" />
                
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Botão flutuante */}
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>

              {/* TEXTO DO SERVIÇO */}
              <div className="flex items-start justify-between gap-4 px-2">
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:rotate-45 shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};