import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    tipo: 'copos-brownies',
    data: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) return;

    // Send via WhatsApp formatted message
    const msg = `*Nova Mensagem pelo Site da Brigaderia Pedaço do Céu*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Interesse:* ${formData.tipo}\n` +
      (formData.data ? `*Data Desejada:* ${formData.data}\n` : '') +
      (formData.mensagem ? `*Mensagem:* ${formData.mensagem}\n` : '');

    window.open(`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Avenida Doutor José Maciel, 1053, Taboão da Serra, SP'
  )}`;

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#292524]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0EA5E9]">
            Onde Estamos & Como Falar Conosco
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            Venha buscar sua sobremesa ou encomende online.
          </h2>
          <p className="text-base text-[#57534E]">
            Estamos na Avenida Doutor José Maciel com brownies quentinhos, copos da felicidade montados na hora e morangos do amor prontos para adoçar o seu dia.
          </p>
        </div>

        {/* 2-Column Split: Info / Map & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#292524]/10 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-[#1C1917]">Endereço da Doceria</h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {STORE_INFO.address}<br />
                    {STORE_INFO.neighborhood} · {STORE_INFO.city} - {STORE_INFO.state}<br />
                    CEP: {STORE_INFO.cep}
                  </p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir rota no Google Maps</span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#292524]/10 shadow-xs flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#1C1917]">Telefone & WhatsApp</h3>
                <p className="text-xs sm:text-sm text-[#57534E]">
                  {STORE_INFO.phone}
                </p>
                <p className="text-xs text-[#78716C]">
                  Atendimento ágil para reservas, encomendas e retiradas.
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#292524]/10 shadow-xs flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-bold text-sm text-[#1C1917]">Horário de Atendimento</h3>
                <div className="space-y-1 text-xs text-[#57534E]">
                  {STORE_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-0.5 border-b border-[#292524]/5 last:border-0">
                      <span>{h.days}</span>
                      <span className="font-semibold text-[#1C1917] tabular-nums">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct CTA card */}
            <div className="p-6 rounded-2xl bg-[#0EA5E9] text-white shadow-md space-y-3">
              <h4 className="font-serif text-lg font-bold">Dúvidas sobre sabores do dia?</h4>
              <p className="text-xs text-[#F8FAFC]/90 leading-relaxed">
                Fale com a nossa equipe no WhatsApp para reservar seus copos da felicidade ou brownies quentinhos.
              </p>
              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de consultar os sabores de brownies, copos da felicidade e morangos disponíveis hoje.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold bg-white text-[#0284C7] hover:bg-[#F8FAFC] transition-colors shadow-xs"
              >
                <span>Entrar em contato</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact / Pre-order Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#292524]/10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Mensagem Enviada!
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto">
                  Obrigado pelo contato! Redirecionamos seus dados diretamente para nosso WhatsApp para que você receba um retorno humanizado e imediato.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#0EA5E9] bg-[#0EA5E9]/10 hover:bg-[#0EA5E9]/20 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    Fale com a Nossa Confeitaria
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    Preencha os campos abaixo para dúvidas, encomendas de festa ou reserva de doces.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#292524]">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-[#FAF7F2] border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#292524]">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-[#FAF7F2] border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#292524]">
                      Tipo de Doce / Encomenda
                    </label>
                    <select
                      value={formData.tipo}
                      onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-[#FAF7F2] border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] text-[#292524]"
                    >
                      <option value="copos-brownies">Copos da Felicidade & Brownies</option>
                      <option value="morangos-amor">Morangos do Amor (Tradicionais e Gourmet)</option>
                      <option value="box-degustacao">Box Degustação Do Céu (Presente)</option>
                      <option value="kit-festa">Mesa de Sobremesas para Festa / Aniversário</option>
                      <option value="corporativo">Lembrancinhas / Pedido Corporativo</option>
                      <option value="duvidas">Dúvidas sobre Sabores e Ingredientes</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#292524]">
                      Data Desejada (Opcional)
                    </label>
                    <input
                      type="date"
                      value={formData.data}
                      onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-[#FAF7F2] border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] text-[#292524]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#292524]">
                    Como podemos adoçar o seu dia?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conte quantos brownies, copos ou morangos do amor você gostaria, horário para retirada na Av. Dr. José Maciel ou endereço de entrega..."
                    className="w-full px-4 py-3 text-xs rounded-xl bg-[#FAF7F2] border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-sm font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>

                <p className="text-[11px] text-center text-[#78716C]">
                  Seus dados são protegidos e usados unicamente para responder ao seu pedido.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
