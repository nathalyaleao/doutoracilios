import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Mantive o padrão "py-12" e a borda superior na cor da marca
    <footer className="bg-white border-t-2 border-primary/20 py-12 relative overflow-hidden">
      
      {/* Pequeno detalhe decorativo de fundo (opcional, bem suave) */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* COLUNA 1: MARCA & SOBRE */}
          <div className="md:col-span-2 space-y-6">
            <div>
                <a href="#" className="font-heading font-bold text-3xl text-gray-900 block leading-none">
                Doutora <span className="text-primary">Cílios</span>
                </a>
                <span className="text-xs font-bold text-primary/80 tracking-[0.2em] uppercase mt-1 block">
                    Beauty & Academy
                </span>
            </div>
            
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Referência em extensão de alta durabilidade e formação profissional. 
              Elevamos sua autoestima e sua carreira com técnica e segurança.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/5592991598023"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Phone size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
                Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Início', link: '#' },
                { name: 'Procedimentos', link: '#servicos' },
                { name: 'Cursos & Academy', link: '#servicos' }, // Leva para serviços onde tem o curso
                { name: 'Depoimentos', link: '#depoimentos' },
                { name: 'Blog da Beleza', link: '#blog' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link}
                    className="text-gray-500 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-500 group">
                <div className="p-2 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={14} />
                </div>
                <span className="mt-1">Manaus, Amazonas<br/>Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 group">
                <div className="p-2 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                     <Phone size={14} />
                </div>
                <span>(92) 99159-8023</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 group">
                <div className="p-2 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={14} />
                </div>
                <span>contato@doutoracilios.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RODAPÉ DO RODAPÉ */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            © {currentYear} Doutora Cílios Beauty & Academy. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
