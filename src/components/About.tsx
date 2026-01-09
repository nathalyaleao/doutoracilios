import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30 overflow-hidden relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LADO ESQUERDO: FOTO DA PROFISSIONAL */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Moldura dupla para dar efeito de profundidade */}
          <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-[2rem] -z-10" />
          
          <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
              alt="Doutora Cílios" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Flutuante "Academy" */}
          <div className="absolute bottom-8 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-primary/10 flex items-center gap-3 animate-pulse">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Referência em Ensino</p>
              <p className="text-primary font-bold text-sm">Método Exclusivo</p>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: TEXTO E AUTORIDADE */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-sm font-bold tracking-wide mb-6 border border-primary/20 shadow-sm">
              <Award size={14} />
              <span>Beauty & Academy</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mais do que estética, <br />
              <span className="text-primary italic">uma ciência.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundadora da <strong>Doutora Cílios</strong>, desenvolvi uma metodologia própria focada na saúde dos fios e na durabilidade extrema. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Não entregamos apenas beleza, mas auto-estima com responsabilidade técnica. Hoje, além de atender, formo novas profissionais que desejam se destacar no mercado com a técnica de retenção de <strong>+40 dias</strong>.
            </p>

            {/* GRID DE ESTATÍSTICAS (PROVA SOCIAL) */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm text-center hover:shadow-md transition-shadow">
                <p className="text-3xl font-heading font-bold text-primary mb-1">+2.000</p>
                <p className="text-sm text-gray-500 font-medium">Alunas Formadas</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm text-center hover:shadow-md transition-shadow">
                <p className="text-3xl font-heading font-bold text-primary mb-1">40 Dias</p>
                <p className="text-sm text-gray-500 font-medium">Retenção Média</p>
              </div>
            </div>

            <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Conhecer a Mentoria
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};