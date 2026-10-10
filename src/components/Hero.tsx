import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Heart, ArrowRight, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#FAF7F2]">
      {/* Background warm aesthetic accents */}
      <div 
        className="absolute top-0 right-1/4 -translate-y-1/2 w-[520px] h-[520px] bg-[#0EA5E9]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 translate-y-1/3 w-[420px] h-[420px] bg-rose-500/5 rounded-full blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top announcement bar / dessert live status */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs sm:text-sm text-[#78716C] mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/10 text-[#0284C7] font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#0EA5E9] fill-current" />
            Doces Frescos do Dia
          </span>
          <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
          <span className="hidden sm:inline">Brownies, Copos da Felicidade & Morangos do Amor</span>
          <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
          <span className="flex items-center gap-1 text-[#57534E]">
            <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Taboão da Serra, SP
          </span>
        </motion.div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headlines & Call-to-actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.25rem] leading-[1.05] tracking-tight text-[#1C1917] [text-wrap:balance]">
                Onde o chocolate nobre encontra o morango fresco e a doçura <span className="italic text-[#0EA5E9] font-normal">toca o céu.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed max-w-2xl font-normal">
                Brownies fudge de verdade com casquinha craquelada, copos da felicidade generosos em camadas aveludadas e morangos do amor artesanais cobertos com o melhor chocolate. Produção fresca do dia na Av. Doutor José Maciel, 1053.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de pedir brownies, copos da felicidade e morangos do amor na Brigaderia Pedaço do Céu.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-[#F8FAFC] bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#1C1917] bg-white border border-[#292524]/10 hover:border-[#0EA5E9] hover:text-[#0EA5E9] rounded-full transition-all shadow-sm hover:shadow"
              >
                <span>Explorar Cardápio de Doces</span>
              </a>
            </motion.div>

            {/* Key trust markers & proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-6 border-t border-[#292524]/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tabular-nums">100%</span>
                <span className="text-xs text-[#78716C] leading-snug">Chocolate nobre e cacau puro</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tabular-nums">Frescos</span>
                <span className="text-xs text-[#78716C] leading-snug">Morangos do dia higienizados um a um</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tabular-nums">Na Hora</span>
                <span className="text-xs text-[#78716C] leading-snug">Copos montados para máxima crocância</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#0EA5E9] tabular-nums">4.9 ★</span>
                <span className="text-xs text-[#78716C] leading-snug">Mais de 450 clientes apaixonados</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Asset (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#292524]/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80"
                alt="Copo da Felicidade com brownie e morango na Brigaderia Pedaço do Céu"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1C1917]">Copo da Felicidade Supremo</h4>
                    <p className="text-xs text-[#78716C]">Brownie fudge, Ninho & morangos</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#0284C7] bg-[#F8FAFC] px-3 py-1.5 rounded-full border border-[#0EA5E9]/20 tabular-nums">
                  R$ 27,90
                </span>
              </div>
            </div>

            {/* Floating Schedule Pill Top Right */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-[#1C1917] text-white px-4 py-2.5 rounded-2xl shadow-xl text-xs font-medium border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span>Aberto hoje até as 21h</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
