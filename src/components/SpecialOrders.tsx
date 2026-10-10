import React, { useState } from 'react';
import { Gift, Sparkles, Users, ArrowRight, Check } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const SpecialOrders: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'box' | 'festa' | 'lembranca'>('box');

  const options = [
    {
      id: 'box' as const,
      title: 'Box Degustação Do Céu',
      subtitle: 'O presente perfeito para quem ama doces',
      priceFrom: 'R$ 119,00',
      items: [
        '2 Copos da Felicidade 400ml (Ninho & Nutella)',
        '2 Brownies Fudge Recheados generosos',
        '2 Morangos do Amor Gourmet banhados no chocolate belga',
        '6 Brigadeiros Artesanais Sortidos',
        'Caixa presenteável rígida com fita de cetim e cartão personalizado',
      ],
      icon: Gift,
    },
    {
      id: 'festa' as const,
      title: 'Mesa de Sobremesas para Festa',
      subtitle: 'Para aniversários, confraternizações e encontros',
      priceFrom: 'R$ 290,00',
      items: [
        '15 Morangos do Amor Gourmet no palito',
        '15 Mini Copos da Felicidade individuais em camadas',
        '40 Brigadeiros Belgas enrolados no dia',
        '1 Tabuleiro de Brownie cortado em quadradinhos mordíveis',
        'Embalagens e forminhas temáticas inclusas',
      ],
      icon: Users,
    },
    {
      id: 'lembranca' as const,
      title: 'Lembrancinhas & Corporativo',
      subtitle: 'Morangos do Amor e Mini Brownies personalizados',
      priceFrom: 'Sob consulta',
      items: [
        'Morangos do Amor embalados individualmente com laço',
        'Mini potes de brownie vulcão com colherzinha de madeira',
        'Tags com a logo da sua marca ou nome do evento',
        'Descontos especiais para pedidos acima de 25 unidades',
        'Entrega pontual com embalagem térmica garantida',
      ],
      icon: Sparkles,
    },
  ];

  const currentOption = options.find((o) => o.id === selectedPlan)!;

  const handleWhatsappInquiry = () => {
    const text = `Olá! Gostaria de encomendar o "${currentOption.title}" de sobremesas na Brigaderia Pedaço do Céu. Poderiam me passar os detalhes de disponibilidade?`;
    window.open(`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="encomendas" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#292524]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0284C7]">
            Momentos Inesquecíveis
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            Kits especiais com brownies, copos e morangos do amor para comemorar.
          </h2>
          <p className="text-base text-[#57534E]">
            Preparados sob encomenda com frutas colhidas no dia e brigadeiros apurados na hora para garantir o sabor incomparável.
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-white border border-[#292524]/10 shadow-xs">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedPlan === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedPlan(opt.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0EA5E9] text-white shadow-sm'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{opt.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Selected Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#292524]/10 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs text-[#0284C7] font-semibold">{currentOption.subtitle}</span>
              <h3 className="font-serif text-3xl font-bold text-[#1C1917] mt-1">
                {currentOption.title}
              </h3>
            </div>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#78716C] block">
                O que inclui:
              </span>
              <ul className="space-y-2">
                {currentOption.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#57534E]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#292524]/10 text-center space-y-4">
            <div>
              <span className="text-xs text-[#78716C] block">A partir de</span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0EA5E9] tabular-nums">
                {currentOption.priceFrom}
              </span>
              <span className="text-[11px] text-[#A8A29E] block mt-1">
                Encomenda prévia de 24h a 48h
              </span>
            </div>

            <button
              onClick={handleWhatsappInquiry}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Personalizar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-[#78716C]">
              Retirada na Av. Dr. José Maciel ou entrega agendada.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
