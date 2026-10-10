import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Estou no site da Brigaderia Pedaço do Céu e gostaria de pedir brownies, copos da felicidade e morangos do amor.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1C1917] px-3.5 py-2 rounded-2xl shadow-xl border border-[#292524]/10 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="font-medium">
            Brownies & Copos frescos hoje! Fale conosco ✨
          </span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-[#A8A29E] hover:text-[#1C1917] ml-1 p-0.5"
            aria-label="Fechar dica do WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button with subtle pulse */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Brigaderia Pedaço do Céu"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20BD5A] transition-all hover:scale-105 active:scale-95"
      >
        {/* Subtle breathing ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
          aria-hidden="true"
        />

        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
