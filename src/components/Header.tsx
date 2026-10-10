import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#292524]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] tracking-tight hover:text-[#0EA5E9] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" aria-hidden="true" />
          <span>{STORE_INFO.name}</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534E]">
          <a 
            href="#inicio" 
            className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap shrink-0"
          >
            Início
          </a>
          <a 
            href="#produtos" 
            className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap shrink-0"
          >
            Brownies & Copos
          </a>
          <a 
            href="#sobre" 
            className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap shrink-0"
          >
            Nossa Confeitaria
          </a>
          <a 
            href="#encomendas" 
            className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap shrink-0"
          >
            Morangos & Kits
          </a>
          <a 
            href="#contato" 
            className="hover:text-[#0EA5E9] transition-colors whitespace-nowrap shrink-0"
          >
            Localização & Contato
          </a>
        </nav>

        {/* Zone 3: 1 primary action + cart button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label={`Ver bandeja de doces com ${cartCount} itens`}
            className="relative p-2.5 rounded-full text-[#292524] hover:bg-[#F0EAE1] hover:text-[#0EA5E9] transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#0EA5E9] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de fazer uma encomenda de sobremesas na Brigaderia Pedaço do Céu.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full transition-all shadow-sm hover:shadow-md whitespace-nowrap shrink-0"
          >
            <span>Fazer Encomenda</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="md:hidden p-2 rounded-lg text-[#292524] hover:bg-[#F0EAE1] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#292524]/10 px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#292524]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#292524] hover:text-[#0EA5E9] transition-colors"
            >
              Início
            </a>
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#292524] hover:text-[#0EA5E9] transition-colors"
            >
              Brownies & Copos
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#292524] hover:text-[#0EA5E9] transition-colors"
            >
              Nossa Confeitaria
            </a>
            <a
              href="#encomendas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#292524] hover:text-[#0EA5E9] transition-colors"
            >
              Morangos & Kits
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#292524] hover:text-[#0EA5E9] transition-colors"
            >
              Localização & Contato
            </a>
          </nav>
          <div className="pt-4 border-t border-[#292524]/10 flex flex-col gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de fazer uma encomenda na Brigaderia Pedaço do Céu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full text-center transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Entrar em contato</span>
            </a>
            <p className="text-xs text-center text-[#78716C]">
              Atendimento direto: {STORE_INFO.phone}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
