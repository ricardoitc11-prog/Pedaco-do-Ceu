import React from 'react';
import { X, Sparkles, Check, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isAdded: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isAdded,
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#292524]/10 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar detalhes da sobremesa"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#292524] shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full bg-[#EFE9DF] overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            {product.highlightTag && (
              <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#0284C7] font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                {product.highlightTag}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-[#78716C] mt-1">{product.unit}</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-2xl sm:text-3xl font-bold text-[#0EA5E9] tabular-nums">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <p className="text-[#57534E] text-base leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Ingredients & Details */}
            <div className="space-y-3 pt-4 border-t border-[#292524]/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                Ingredientes Selecionados
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-[#57534E]">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white border border-[#292524]/10"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Preparation Note */}
            {product.preparationNote && (
              <div className="flex items-center gap-2 text-xs text-[#0284C7] bg-[#0EA5E9]/10 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span><strong>Preparo artesanal:</strong> {product.preparationNote}</span>
              </div>
            )}

            {product.servingSuggestion && (
              <div className="text-xs text-[#57534E] bg-white p-3.5 rounded-xl border border-[#292524]/10">
                <strong className="text-[#1C1917]">Como saborear melhor:</strong> {product.servingSuggestion}
              </div>
            )}

            {product.allergens && (
              <p className="text-[11px] text-[#A8A29E]">
                * {product.allergens}
              </p>
            )}

            {/* Modal Actions */}
            <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#292524]/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-full text-xs font-semibold text-[#57534E] hover:text-[#1C1917] hover:bg-black/5 transition-colors"
              >
                Continuar vendo
              </button>

              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#0EA5E9] hover:bg-[#0284C7] text-white hover:shadow-lg'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Adicionado na Bandeja</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar à Encomenda</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
