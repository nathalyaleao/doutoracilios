import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const instagramLink = "https://www.instagram.com/cilioseciastudio/";

  return (
    // VOLTEI PARA O PADRÃO "PY-12": Espaçamento equilibrado em cima e embaixo, como antes.
    <footer className="bg-white border-t-2 border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* COLUNA 1: MARCA */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="font-heading font-bold text-2xl text-gray-900 block">
              Cilios e <span className="text-primary">Cia</span>
            </a>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Especialistas em design de cílios e sobrancelhas. Transforme seu olhar com técnicas modernas, segurança e um atendimento que você merece.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4 pt-2">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              {['Serviços', 'Planos', 'Depoimentos', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-gray-500 hover:text-primary transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Manaus, AM</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={16} className="text-primary shrink-0" />
                <span>(92) 99415-2566</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={16} className="text-primary shrink-0" />
                <span>contato@ciliosecia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RODAPÉ DO RODAPÉ (Igual ao print: dispersado e limpo) */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            © 2026 Cilios e Cia Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};