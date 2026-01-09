import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Aqui agrupamos os serviços da Doutora Cílios em 4 categorias principais
const services = [
  {
    title: "Extensão & Efeitos",
    description: "Do Clássico ao Efeito Molhado, Fox Eyes, Sirena e Harmony. Personalização total do olhar.",
    image: "/extensao-cilios.jpg" // Lembre de renomear suas fotos pra facilitar
  },
  {
    title: "Volumes Tecnológicos",
    description: "Volume Russo, Egípcio, Brasileiro e 3D. Densidade e luxo com fios de alta tecnologia.",
    image: "/lash-lafintg.jpeg"
  },
  {
    title: "Sobrancelhas & Lifting",
    description: "Design com Henna, Brow Lamination e Lash Lifting. Nutrição e alinhamento dos fios naturais.",
    image: "/designer-sobrancelha.jpg"
  },
  {
    title: "Academy & Cursos",
    description: "Mentoria para iniciantes e avançado. Aprenda a técnica de retenção de 40+ dias.",
    image: "/academy.png"
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6 border border-primary/20"
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
            Expertise que transforma
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Combinamos visagismo e saúde dos fios para entregar resultados que elevam sua autoestima e duram muito mais.
          </motion.p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              // --- AQUI ESTÁ O "TCHAN SUAVE" ---
              initial={{ opacity: 0, y: 80, scale: 0.9 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true, margin: "-10%" }} 
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,   
                mass: 1,
                delay: index * 0.1 // Efeito cascata (um aparece depois do outro)
              }} 
              // ---------------------------
              className="group cursor-pointer"
            >
              {/* CARTÃO DA IMAGEM */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 bg-gray-200 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 border-4 border-white">
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 z-10 pointer-events-none group-hover:bg-black/10" />
                
                {/* Placeholder elegante enquanto não tem foto */}
                <img
                  src={service.image}
                  alt={service.title}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"; // Imagem genérica de backup
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Botão flutuante (Aparece ao passar o mouse) */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20 text-primary shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* TEXTO DO SERVIÇO */}
              <div className="flex items-start justify-between gap-4 px-2">
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {service.description}
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:rotate-45 shrink-0">
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