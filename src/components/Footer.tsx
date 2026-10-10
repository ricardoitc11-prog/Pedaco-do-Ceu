import React from 'react';
import { Heart, MapPin, Phone, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-16 pb-12 border-t border-[#292524]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              {STORE_INFO.name}
            </span>
            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
              Doceria artesanal especializada em brownies fudge com casquinha craquelada, copos da felicidade generosos em camadas, morangos do amor crocantes e brigadeiros nobres.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#0EA5E9]">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Feito com amor em Taboão da Serra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E5E4]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Brownies & Copos da Felicidade
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Nossa Confeitaria
                </a>
              </li>
              <li>
                <a href="#encomendas" className="hover:text-white transition-colors">
                  Morangos do Amor & Kits
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Telephone */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E5E4]">
              Onde Encontrar
            </h4>
            <div className="space-y-2.5 text-xs text-[#A8A29E]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address}<br />
                  {STORE_INFO.neighborhood} · {STORE_INFO.city} - {STORE_INFO.state}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E5E4]">
              Horário da Loja
            </h4>
            <div className="space-y-1.5 text-xs text-[#A8A29E]">
              <p className="flex items-center gap-2 text-white font-medium">
                <Clock className="w-3.5 h-3.5 text-[#0EA5E9]" />
                <span>Atendimento presencial e delivery</span>
              </p>
              {STORE_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] py-0.5 border-b border-white/5 last:border-0">
                  <span>{h.days}</span>
                  <span className="text-white font-medium tabular-nums">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© {new Date().getFullYear()} {STORE_INFO.name}. Todos os direitos reservados.</p>
          <p className="text-[11px]">
            Cardápio Digital · Confeitaria Artesanal de Sobremesas · Feito com carinho no Brasil
          </p>
        </div>

      </div>
    </footer>
  );
};
