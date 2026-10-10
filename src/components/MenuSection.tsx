import React, { useState, useMemo } from 'react';
import { Search, Heart, Sparkles } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { CATEGORIES, PRODUCTS, STORE_INFO } from '../data/products';
import { CategoryId, Product } from '../types';

interface MenuSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'todos' || product.category === activeCategory;
      const matchesQuery =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.ingredients.some((ing) =>
          ing.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#292524]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0284C7]">
              Cardápio de Sobremesas Artesanais
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
              Brownies fudge, copos em camadas e morangos do amor irresistíveis.
            </h2>
            <p className="text-base text-[#57534E]">
              Escolha suas sobremesas favoritas para retirar fresquinhas na nossa loja ou receber com toda a comodidade na sua casa. Feito com chocolate belga e morangos selecionados do dia.
            </p>
          </div>

          {/* Fresh schedule strip */}
          <div className="bg-white p-4 rounded-2xl border border-[#292524]/10 shadow-xs space-y-2 shrink-0 md:max-w-xs w-full">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917]">
              <Sparkles className="w-4 h-4 text-[#0EA5E9]" />
              <span>Horários das Rodadas Frescas</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-[#292524]/5">
              {STORE_INFO.dessertSchedule.map((b, i) => (
                <div key={i} className="bg-[#FAF7F2] p-1.5 rounded-lg">
                  <span className="block text-xs font-bold text-[#0EA5E9] tabular-nums">{b.time}</span>
                  <span className="text-[10px] text-[#78716C] leading-tight block">Rodada</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4">
          
          {/* Segmented category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryId)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0EA5E9] text-white shadow-sm'
                      : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2ECE1] border border-[#292524]/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar brownie, copo, morango..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-white border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none focus:ring-1 focus:ring-[#0EA5E9] text-[#1C1917] placeholder:text-[#A8A29E]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917]"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#292524]/10 p-8 max-w-lg mx-auto space-y-3">
            <p className="font-serif text-xl font-bold text-[#1C1917]">
              Nenhum doce encontrado
            </p>
            <p className="text-xs text-[#78716C]">
              Não encontramos nenhuma sobremesa com o termo "{searchQuery}". Tente buscar por outros sabores ou limpe a busca.
            </p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#0EA5E9] bg-[#0EA5E9]/10 rounded-full hover:bg-[#0EA5E9]/20 transition-colors"
            >
              Ver todas as sobremesas
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
