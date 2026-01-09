import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ArrowRight, BookOpen } from "lucide-react";

// Fotos do Unsplash para garantir que o layout fique bonito imediatamente
const posts = [
  {
    title: "5 cuidados essenciais pós-extensão",
    category: "Cuidados",
    image: "/foto2.jpg",
    excerpt: "Saiba como higienizar e manter seus cílios impecáveis por muito mais tempo."
  },
  {
    title: "Tendências de sobrancelhas 2026",
    category: "Tendências",
    image: "/foto1.jpg",
    excerpt: "O que está em alta no mundo beauty: do natural ao Brow Lamination."
  },
  {
    title: "Volume Russo ou Brasileiro?",
    category: "Guia",
    image: "/foto3.jpg",
    excerpt: "Descubra qual técnica combina melhor com o formato do seu olho."
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Decoração de fundo sutil */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium tracking-wide mb-4 border border-primary/20">
              <Sparkles size={14} fill="currentColor" />
              <span>Dicas & Trends</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Blog da Beleza
            </h2>
          </motion.div>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-0.5"
          >
            Ver todos os artigos
            <ArrowUpRight size={16} strokeWidth={2} />
          </motion.a>
        </div>

        {/* GRID DOS POSTS */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              // --- SUA ANIMAÇÃO FLUIDA PREFERIDA ---
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{
                duration: 0.8, 
                delay: index * 0.3, // Delay escalonado que você gosta
                ease: [0.25, 0.46, 0.45, 0.94], // Curva suave
              }}
              // ------------------------------------
              className="h-full"
            >
              <a href="#" className="group flex flex-col h-full bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                
                {/* Imagem */}
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100 relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Tag Flutuante */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary tracking-wide z-20 shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="px-2 pb-4 flex flex-col flex-grow">
                  {/* Título */}
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  {/* Resumo */}
                  <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Link fake */}
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-primary transition-all group-hover:translate-x-2">
                    Ler artigo completo
                    <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Botão Mobile (aparece só no celular) */}
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary/10 rounded-full text-primary font-bold hover:bg-primary hover:text-white transition-all w-full">
                Ver todos os artigos
                <ArrowUpRight size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};