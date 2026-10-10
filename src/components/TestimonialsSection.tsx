import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0E6] border-t border-[#292524]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0284C7]">
            Vozes da Vizinhança
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            O carinho que recebemos de quem frequenta a nossa casa.
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Clientes de Taboão da Serra e região que compartilham com a gente a paixão pelo pão bem feito e pelo brigadeiro de verdade.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-[#292524]/10 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#44403C] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#292524]/5">
                <span className="block font-bold text-sm text-[#1C1917]">{t.name}</span>
                <span className="block text-xs text-[#78716C]">{t.neighborhood}</span>
                <span className="inline-block mt-2 text-[11px] font-medium text-[#0284C7] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-full">
                  Item favorito: {t.favoriteItem}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
