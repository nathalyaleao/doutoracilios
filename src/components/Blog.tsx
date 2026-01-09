import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection"; // Mantive só pro título
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "5 cuidados essenciais após extensão de cílios",
    category: "Cuidados",
    image: "/foto2.jpg"
  },
  {
    title: "Tendências de sobrancelhas para 2024",
    category: "Tendências",
    image: "/foto1.jpg"
  },
  {
    title: "Volume russo vs cílios clássicos: qual escolher?",
    category: "Guia",
    image: "/foto3.jpg"
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO (Mantido igual) */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" direction="left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-4">
              <Sparkles size={14} fill="currentColor" />
              <span>Dicas & Trends</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Blog da Beleza
            </h2>
          </div>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-0.5"
          >
            Ver todos os artigos
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </AnimatedSection>

        {/* GRID DOS POSTS */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              // --- AQUI ESTÁ A CORREÇÃO DA ANIMAÇÃO ---
              // Forcei cada um a começar invisível e deslocado
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} // Move para o lugar certo
              viewport={{ once: true, margin: "-50px" }} // Garante que espera entrar na tela
              transition={{
                duration: 0.8, // Movimento lento e elegante
                delay: index * 0.3, // O SEGREDO: Cada um espera 0.3s a mais que o anterior
                ease: [0.25, 0.46, 0.45, 0.94], // Curva suave
              }}
              // ----------------------------------------
            >
              <a href="#" className="group block h-full">
                {/* O CARTÃO COM "TCHAN" */}
                <article className="h-full bg-white rounded-[2rem] border-2 border-gray-100 p-4 flex flex-col hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  
                  {/* Imagem */}
                  <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  <div className="px-2 pb-2 flex flex-col flex-grow">
                    {/* Categoria */}
                    <div className="mb-4">
                      <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full tracking-wide">
                        {post.category}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    
                    {/* Link fake */}
                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-primary transition-colors">
                      Ler artigo <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};