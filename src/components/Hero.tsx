import { motion } from "framer-motion";
import { GraduationCap, CalendarCheck, MapPin } from "lucide-react";

export const Hero = () => {
  const whatsappLink = "https://wa.me/5592994152566";
  const heroImage = "/banner.png";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      
      {/* Decoração de Fundo (Marsala Suave) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
        
        {/* LADO ESQUERDO: TEXTOS + FOTO MOBILE */}
        <div className="flex flex-col order-1">
          
          {/* 1. TÍTULO (Vem da ESQUERDA) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Tag de Localização */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
              <MapPin size={12} />
              Manaus - AM
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              O poder do seu olhar por <span className="text-primary ">mais de 40 dias.</span>
            </h1>
          </motion.div>

          {/* 2. FOTO MOBILE (Vem da DIREITA - Efeito Cruzado) */}
          <motion.div
             initial={{ opacity: 0, x: 100 }} // <--- AQUI: Vem da direita
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} // Um pouquinho depois do título
             className="block lg:hidden relative mb-8 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white h-[380px] group"
          >
              <img 
                src={heroImage} 
                alt="Doutora Cílios Banner Mobile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              
              {/* Selo 40+ Mobile - Quicando */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 animate-bounce">
                  <div className="bg-primary p-2 rounded-full text-white">
                    <span className="font-heading font-bold text-lg">40+</span>
                  </div>
                  <div>
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Durabilidade</p>
                      <p className="font-bold text-gray-900 text-xs">Dias Intactos</p>
                  </div>
              </div>
          </motion.div>

          {/* 3. TEXTO E BOTÕES (Vem da ESQUERDA) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} // Delay para dar ritmo
          >
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Doutora Cílios Beauty & Academy. Especialista em extensão de alta durabilidade e referência na formação de novas Lash Designers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botão Principal - Agendar */}
              <a
                href={whatsappLink}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                Agendar Horário
                <CalendarCheck size={18} />
              </a>

              {/* Botão Secundário - Cursos */}
              <a
                href="#cursos"
                className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold text-sm hover:border-primary hover:bg-secondary/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Sou Aluna / Cursos
                <GraduationCap size={18} />
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
               </div>
               <p>Junte-se a mais de <span className="font-bold text-primary">2.000 alunas e clientes</span></p>
            </div>
          </motion.div>
        </div>

        {/* LADO DIREITO: FOTO DESKTOP (Vem da DIREITA) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block order-2"
        >
            {/* Moldura Decorativa Marsala */}
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 transform translate-x-4 translate-y-4 -z-10" />
            
            {/* Container da Imagem Desktop */}
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[600px] bg-gray-100 relative group">
                <img 
                  src={heroImage} 
                  alt="Doutora Cílios Banner" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Card Flutuante Desktop - Quicando */}
            <div className="absolute top-10 -left-10 bg-white p-4 pr-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce">
                <div className="bg-primary p-3 rounded-full text-white shadow-lg shadow-primary/30">
                   <span className="font-heading font-bold text-xl">40+</span>
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Durabilidade</p>
                    <p className="font-bold text-gray-900 text-sm">Dias de Cílios Intactos</p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};