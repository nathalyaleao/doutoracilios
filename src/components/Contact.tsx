import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-[#faf9f6] relative overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LADO ESQUERDO: INFORMAÇÕES */}
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
              <MessageCircle size={14} fill="currentColor" />
              <span>Fale Conosco</span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vamos realçar sua beleza?
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Tem alguma dúvida sobre os procedimentos ou quer agendar uma avaliação personalizada? Estamos esperando por você.
            </p>

            <div className="space-y-8">
              {/* Item de Contato 1 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900 mb-1">Nosso Studio</p>
                  <p className="text-gray-500">Manaus, AM - Vieiralves</p>
                </div>
              </div>

              {/* Item de Contato 2 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900 mb-1">Telefone / WhatsApp</p>
                  <p className="text-gray-500">(92) 99415-2566</p>
                </div>
              </div>

              {/* Item de Contato 3 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900 mb-1">E-mail</p>
                  <p className="text-gray-500">contato@ciliosecia.com.br</p>
                </div>
              </div>

              {/* Item de Contato 4 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900 mb-1">Horário de Atendimento</p>
                  <p className="text-gray-500">Seg - Sáb: 9h às 19h</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* LADO DIREITO: FORMULÁRIO */}
          <AnimatedSection direction="right">
            <form className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-primary/10 shadow-2xl shadow-primary/5 space-y-6 relative overflow-hidden">
              
              {/* Detalhe decorativo no topo do form */}
              <div className="absolute top-0 left-0 w-full h-2 bg-primary/20" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                    className="w-full px-5 py-4 rounded-xl border-transparent bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(92) 99999-9999"
                    className="w-full px-5 py-4 rounded-xl border-transparent bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="w-full px-5 py-4 rounded-xl border-transparent bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-gray-700 ml-1">
                  Serviço de interesse
                </label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full px-5 py-4 rounded-xl border-transparent bg-gray-50 text-gray-900 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="extensao">Extensão de Cílios</option>
                    <option value="lifting">Lash Lifting</option>
                    <option value="design">Design de Sobrancelhas</option>
                    <option value="micro">Micropigmentação</option>
                  </select>
                  {/* Setinha customizada do select */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Conte-nos como podemos ajudar..."
                  className="w-full px-5 py-4 rounded-xl border-transparent bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-6 rounded-xl text-base font-bold hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2"
              >
                Enviar mensagem
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};