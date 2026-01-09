import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Star, MessageSquareQuote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

const testimonials = [
  {
    name: "Alex Nogueira",
    company: "Studio Visage",
    text: "Atendimento incrível! Me senti valorizada e saí com cílios impecáveis. Recomendo de olhos fechados.",
    image: testimonial1,
  },
  {
    name: "Taylor Prado",
    company: "Brow Experts",
    text: "Profissionais atenciosas e ambiente acolhedor. Meu olhar ficou renovado, amei o resultado!",
    image: testimonial2,
  },
  {
    name: "Rafaela Muniz",
    company: "Lash & Brow Pro",
    text: "Nunca imaginei que sobrancelhas pudessem transformar tanto! Atendimento top e resultado impecável.",
    image: testimonial3,
  },
  {
    name: "Jade Silveira",
    company: "Cílios de Luxo",
    text: "Equipe dedicada, explicaram tudo. Saí me sentindo poderosa e super satisfeita!",
    image: testimonial4,
  },
  {
    name: "Bruno Salles",
    company: "Estética Prime",
    text: "Ambiente limpo, profissionais cuidadosas e resultado natural. Sempre volto para cuidar dos meus cílios.",
    image: testimonial5,
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <AnimatedSection className="text-center mb-16" direction="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-4">
            <MessageSquareQuote size={14} fill="currentColor" />
            {/* TRADUZIDO AQUI 👇 */}
            <span>Notas de Carinho</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </AnimatedSection>

        {/* PRIMEIRA LINHA */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="bg-white rounded-[2rem] p-8 border-2 border-primary/20 hover:border-primary transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary/80">{testimonial.company}</p>
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
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="bg-white rounded-[2rem] p-8 border-2 border-primary/20 hover:border-primary transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary/80">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};