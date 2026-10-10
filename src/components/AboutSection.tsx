import React from 'react';
import { Heart, Sparkles, ShieldCheck, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#F5F0E6] border-t border-[#292524]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#292524]/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80"
                alt="Confeitaria artesanal finalizando morangos com chocolate e doces gourmet"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#0284C7] font-bold block mb-1">
                  Confeitaria de Taboão da Serra
                </span>
                <p className="text-sm font-serif font-bold text-[#1C1917]">
                  Do fogo brando na panela de fundo grosso até a montagem impecável de cada copo.
                </p>
              </div>
            </div>

            {/* Accent Card Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#0EA5E9] text-white shadow-xl max-w-xs text-xs space-y-1">
              <p className="font-bold text-sm">Chocolate Nobre Callebaut</p>
              <p className="text-[#F8FAFC]/90">Morangos frescos selecionados e brigadeiros enrolados um a um.</p>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#0284C7]">
                Nossa Essência Doce
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
                Sobremesas feitas sem economia de recheio e com afeto de verdade.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              A <strong>Brigaderia Pedaço do Céu</strong> nasceu para transformar o simples momento da sobremesa em um instante de pura celebração. Especializamo-nos em três grandes tentações: o brownie fudge com casquinha craquelada perfeita, os copos da felicidade mais fartos da região e os morangos do amor mais crocantes e suculentos.
            </p>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Aqui não existem atalhos industriais ou pós pré-prontos. Nossos brigadeiros são apurados lentamente na panela com leite condensado de alta qualidade, nossos brownies têm massa densa com 100% chocolate nobre e cada morango é selecionado, lavado e seco individualmente para garantir crocância máxima.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#292524]/10">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#1C1917]">Brownie Fudge Real</h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Casquinha brilhante e miolo úmido, denso e puxa-puxa de chocolate.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#1C1917]">Morangos Selecionados</h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Frutas frescas graúdas do dia envolvidas em calda estaladiça ou chocolate.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#1C1917]">Copos Super Fartos</h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Camadas generosas de brigadeiro de colher, Ninho e pedaços de brownie.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="p-5 rounded-2xl bg-white border border-[#292524]/10 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#0EA5E9]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80"
                  alt="Confeiteira responsável"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs">
                <p className="text-[#1C1917] font-serif italic text-sm">
                  "Um doce não serve apenas para matar a vontade de açúcar. Ele precisa abraçar o coração e fazer os olhos brilharem."
                </p>
                <span className="text-[#78716C] mt-1 block">Confeitaria Pedaço do Céu · Avenida Doutor José Maciel, 1053</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
