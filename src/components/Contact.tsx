import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* LADO ESQUERDO: INFOS DE CONTATO */}
        <motion.div
          initial={{ x: -40, opacity: 0 }} // Entra da esquerda
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94], // MESMA CURVA SUAVE DO TESTIMONIALS
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium tracking-wide mb-6 border border-primary/20">
            <Send size={14} />
            <span>Fale Conosco</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos realçar sua <br />
            <span className="text-primary italic">beleza natural?</span>
          </h2>
          
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Agende seu horário ou tire suas dúvidas sobre nossos cursos. Estamos ansiosas para te atender.
          </p>

          <div className="space-y-6">
            {/* Card WhatsApp */}
            <a 
              href="https://wa.me/5592994152566" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf9f6] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">(92) 99415-2566</p>
              </div>
            </a>

            {/* Card Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf9f6] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Instagram</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">@dra.ciliosbeauty</p>
              </div>
            </a>

            {/* Card Localização */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf9f6] border border-transparent">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Localização</p>
                <p className="text-lg font-bold text-gray-900">Manaus - AM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: FORMULÁRIO (ESTÉTICA) */}
        <motion.div
          initial={{ x: 40, opacity: 0 }} // Entra da direita (cruzado)
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            delay: 0.2, // Um tiquinho depois pra dar o efeito cascata
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10 relative"
        >
          {/* Decoração */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-secondary rounded-bl-[2.5rem] -z-10" />

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-600">
                <option>Agendamento de Cílios</option>
                <option>Cursos e Mentoria</option>
                <option>Sobrancelhas</option>
                <option>Outros</option>
              </select>
            </div>

            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 mt-4">
              Enviar Mensagem
              <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};