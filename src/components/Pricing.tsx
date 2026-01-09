import { motion } from "framer-motion";
import { Check, ArrowRight, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "99",
    period: "/mês",
    description: "Para manter o olhar sempre em dia.",
    features: [
      "1 manutenção de cílios/mês",
      "Design de sobrancelhas mensal",
      "10% OFF em produtos",
      "Agendamento prioritário",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "189",
    period: "/mês",
    description: "O favorito das nossas clientes.",
    features: [
      "2 manutenções de cílios/mês",
      "Design de sobrancelhas quinzenal",
      "20% OFF em produtos",
      "Agendamento VIP",
      "Hidratação labial inclusa",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "299",
    period: "/mês",
    description: "A experiência completa de beleza.",
    features: [
      "Manutenções ilimitadas",
      "Sobrancelhas ilimitadas",
      "30% OFF em produtos",
      "Atendimento exclusivo",
      "Brindes mensais surpresa",
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  const getWhatsappLink = (planName: string) => {
    const text = `Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20de%20assinatura%20${planName}.`;
    return `https://wa.me/5592994152566?text=${text}`;
  };

  return (
    <section id="planos" className="py-20 md:py-32 bg-[#faf9f6] relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6"
          >
            <Crown size={14} fill="currentColor" />
            <span>Clube de Assinatura</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Sua beleza, todo mês
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-light"
          >
            Entre para o clube e garanta cílios e sobrancelhas impecáveis com economia e vantagens exclusivas.
          </motion.p>
        </div>

        {/* GRID DE PLANOS */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              // --- MODO SUAVE ATIVADO 🍃 ---
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 1,       
                delay: index * 0.2,
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full border-2 ${
                plan.highlighted
                  ? "border-primary shadow-2xl shadow-primary/15 z-10 scale-105"
                  : "border-primary/30 shadow-lg shadow-gray-200/50 hover:border-primary"
              }`}
            >
              {/* ETIQUETA DO PREMIUM */}
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg flex items-center gap-2">
                  <Star size={12} className="text-yellow-400" fill="currentColor" />
                  Recomendado
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-sm text-gray-400 align-top mr-1">R$</span>
                <span className="font-heading font-bold text-6xl text-gray-900 tracking-tighter">
                  {plan.price}
                </span>
                <span className="text-gray-400 font-medium">/mês</span>
              </div>

              {/* LISTA DE BENEFÍCIOS */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                    <div className="mt-0.5 p-0.5 rounded-full bg-primary/10 text-primary">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BOTÕES */}
              <motion.a
                href={getWhatsappLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                  plan.highlighted
                    ? "bg-primary text-white shadow-primary/30 hover:bg-primary/90"
                    : "bg-white text-gray-900 border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary"
                }`}
              >
                Assinar {plan.name}
                <ArrowRight size={16} />
              </motion.a>
              
              <p className="text-[10px] text-gray-400 text-center mt-4 tracking-wide uppercase">
                Sem fidelidade • Cancele quando quiser
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};