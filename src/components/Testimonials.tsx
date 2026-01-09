import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Nogueira",
    company: "Cliente VIP",
    text: "Atendimento incrível! Me senti valorizada e saí com cílios impecáveis. Recomendo de olhos fechados.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Taylor Prado",
    company: "Brow Experts",
    text: "Profissionais atenciosas e ambiente acolhedor. Meu olhar ficou renovado, amei o resultado!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Rafaela Muniz",
    company: "Lash Designer",
    text: "Nunca imaginei que sobrancelhas pudessem transformar tanto! Atendimento top e resultado impecável.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Jade Silveira",
    company: "Cliente Mensal",
    text: "Equipe dedicada, explicaram tudo. Saí me sentindo poderosa e super satisfeita!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Bruno Salles",
    company: "Estética Prime",
    text: "Ambiente limpo, profissionais cuidadosas e resultado natural. Sempre volto para cuidar dos meus cílios.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-[#faf9f6] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-4 border border-primary/20">
            <MessageSquareQuote size={14} fill="currentColor" />
            <span>Notas de Carinho</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que dizem nossas clientes
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </motion.div>

        {/* PRIMEIRA LINHA */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              // Animação ORIGINAL "Cílios & Cia"
              initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              // AQUI MUDOU: Tirei 'transition-all' e coloquei 'transition-shadow'
              // Isso impede que o CSS brigue com a animação de entrada
              className="bg-white rounded-[2rem] p-8 border border-primary/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic text-sm md:text-base">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10 p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEGUNDA LINHA */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              // Animação ORIGINAL
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              // AQUI MUDOU: transition-shadow
              className="bg-white rounded-[2rem] p-8 border border-primary/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic text-sm md:text-base">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10 p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};