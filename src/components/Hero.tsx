import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroEyebrow from "@/assets/hero-eyebrow.jpg"; 

export const Hero = () => {
  const whatsappLink = "https://wa.me/5592994152566?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20agendar.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: TEXTOS */}
          <div className="text-left">
            
            {/* 1. A Etiqueta */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6"
            >
              <Star size={14} fill="currentColor" />
              <span>Cílios & Sobrancelhas Premium</span>
            </motion.div>

            {/* 2. O Título */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
             Seu olhar merece ser <span className="text-primary italic font-serif ">inesquecível</span> <br />
            
            </motion.h1>
            
            {/* 3. O Parágrafo */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Especialistas em design de olhar. Do clássico Fio a Fio ao moderno Brow Lamination, cuidamos de cada detalhe do seu rosto.
            </motion.p>
            
            {/* 4. Os Botões */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={whatsappLink}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-lg rounded-full font-medium shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
              >
                Agendar Horário
                <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                className="inline-flex items-center gap-2 text-gray-600 bg-white px-8 py-4 text-lg rounded-full font-medium border border-gray-200 shadow-sm transition-all"
              >
                Ver Catálogo
              </motion.a>
            </motion.div>

            {/* --- NOVO: IMAGEM ESPECIAL PARA CELULAR (SÓ APARECE NO MOBILE) --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 block lg:hidden rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
            >
              {/* Usando a foto de resultado que é mais impactante */}
              <img 
                src="/resultado.jpg" 
                alt="Resultado Cílios Mobile" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            {/* ------------------------------------------------------------------ */}

            {/* 5. A Prova Social */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                   <span className="text-xs">User</span> 
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                   <span className="text-xs">User</span> 
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center overflow-hidden">
                   <span className="text-xs">User</span> 
                </div>
              </div>
              <p>+500 clientes atendidas em Manaus</p>
            </motion.div>
          </div>

          {/* LADO DIREITO: IMAGENS PC (Mantive oculto no mobile "hidden lg:block") */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-2 gap-4 items-center">
              <motion.div 
                whileHover={{ y: -10 }} 
                className="space-y-4 mt-12"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/resultado.jpg" alt="Cílios" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="space-y-4"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={heroEyebrow} alt="Sobrancelhas" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 absolute -bottom-10 -left-10 w-48"
                >
                  <div className="flex text-yellow-400 mb-1">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-xs font-bold text-gray-900">"Melhor studio de Manaus!"</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};