import React, { useState } from 'react';
import { Plus, Check, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
}) => {
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <article
      onClick={() => onSelect(product)}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#292524]/10 hover:border-[#0EA5E9]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      {/* 65%-70% visual image container */}
      <div className="relative aspect-[4/3] w-full bg-[#F5F0E6] overflow-hidden">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF7F2] to-[#EAE3D2]">
            <span className="font-serif text-lg font-bold text-[#1C1917] mb-1">
              {product.name}
            </span>
            <span className="text-xs text-[#78716C]">Sobremesa Artesanal Pedaço do Céu</span>
          </div>
        )}

        {/* Quiet hairline subtle tag */}
        {product.highlightTag && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#0284C7] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
            {product.highlightTag}
          </div>
        )}

        {/* Hover preview quick overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/90 backdrop-blur-sm text-[#1C1917] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Eye className="w-3.5 h-3.5" />
            <span>Ver detalhes</span>
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3 bg-white">
        <div>
          {/* Unboxed metadata kicker */}
          <div className="flex items-center gap-2 text-xs text-[#78716C] mb-1.5">
            <span>{product.unit}</span>
            {product.preparationNote && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#0284C7] font-medium">{product.preparationNote}</span>
              </>
            )}
          </div>

          <h3 className="font-serif text-lg font-bold text-[#1C1917] tracking-tight group-hover:text-[#0EA5E9] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2 mt-1">
            {product.shortDesc}
          </p>
        </div>

        {/* Price & Action Module */}
        <div className="pt-3 border-t border-[#292524]/5 flex items-center justify-between gap-3">
          <div>
            <span className="text-xs text-[#78716C] block font-normal">Valor</span>
            <span className="text-base sm:text-lg font-bold text-[#1C1917] tabular-nums">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Adicionar ${product.name} à bandeja`}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-[#F8FAFC] text-[#0284C7] border border-[#0EA5E9]/30 hover:bg-[#0EA5E9] hover:text-white'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Adicionado</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
