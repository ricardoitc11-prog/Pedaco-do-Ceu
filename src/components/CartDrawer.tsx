import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Store, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [deliveryType, setDeliveryType] = useState<'retirada' | 'entrega'>('retirada');
  const [customerName, setCustomerName] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*🍰 Pedido de Sobremesas - Brigaderia Pedaço do Céu*\n\n`;
    if (customerName) message += `*Cliente:* ${customerName}\n`;
    message += `*Tipo:* ${
      deliveryType === 'retirada'
        ? 'Retirada na Loja (Av. Dr. José Maciel, 1053)'
        : 'Entrega em Taboão da Serra / Região'
    }\n\n`;

    message += `*Sobremesas Escolhidas:*\n`;
    items.forEach((item) => {
      const itemTotal = item.product.price * item.quantity;
      message += `• ${item.quantity}x ${item.product.name} (R$ ${itemTotal
        .toFixed(2)
        .replace('.', ',')})\n`;
    });

    message += `\n*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (customerNotes) message += `*Observações:* ${customerNotes}\n`;
    message += `\nPor favor, confirmem a disponibilidade dos doces e o tempo estimado para retirada ou entrega!`;

    window.open(
      `https://wa.me/${STORE_INFO.phoneRaw}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#292524]/10">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#292524]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#0EA5E9]" />
              <h2 className="font-serif text-lg font-bold text-[#1C1917]">
                Bandeja de Sobremesas
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar gaveta de encomendas"
              className="p-2 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#F2ECE1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAE3D2] flex items-center justify-center mx-auto text-[#78716C]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg font-bold text-[#1C1917]">
                    Sua bandeja está vazia
                  </p>
                  <p className="text-xs text-[#78716C] max-w-xs mx-auto">
                    Explore nosso cardápio e adicione brownies fudge, copos da felicidade e morangos do amor.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] transition-colors"
                >
                  Ver Cardápio
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#292524]/10 shadow-xs flex items-center justify-between gap-3"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#F0EAE1] shrink-0">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1C1917] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#0EA5E9] font-semibold tabular-nums">
                        R$ {item.product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 shrink-0 bg-[#FAF7F2] p-1 rounded-lg border border-[#292524]/10">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 rounded text-[#78716C] hover:text-[#1C1917] hover:bg-white"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 rounded text-[#78716C] hover:text-[#1C1917] hover:bg-white"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#A8A29E] hover:text-rose-600 p-1"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Delivery Option Toggle */}
                <div className="pt-4 space-y-2">
                  <span className="text-xs font-semibold text-[#1C1917] block">
                    Forma de Recebimento
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('retirada')}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                        deliveryType === 'retirada'
                          ? 'bg-[#0EA5E9]/10 border-[#0EA5E9] text-[#0284C7]'
                          : 'bg-white border-[#292524]/10 text-[#57534E]'
                      }`}
                    >
                      <Store className="w-4 h-4 shrink-0" />
                      <div className="text-left">
                        <span className="block leading-none">Retirar na Loja</span>
                        <span className="text-[10px] text-[#78716C] font-normal">Av. José Maciel</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryType('entrega')}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                        deliveryType === 'entrega'
                          ? 'bg-[#0EA5E9]/10 border-[#0EA5E9] text-[#0284C7]'
                          : 'bg-white border-[#292524]/10 text-[#57534E]'
                      }`}
                    >
                      <Truck className="w-4 h-4 shrink-0" />
                      <div className="text-left">
                        <span className="block leading-none">Entrega Local</span>
                        <span className="text-[10px] text-[#78716C] font-normal">Taboão e região</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Optional Customer info */}
                <div className="space-y-2 pt-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Seu Nome (opcional)"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Observação (Ex: sem nozes, horário de retirada...)"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#292524]/10 focus:border-[#0EA5E9] focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer with subtotal and WhatsApp checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#292524]/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#78716C]">Total Estimado</span>
                <span className="font-serif text-2xl font-bold text-[#1C1917] tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Finalizar Encomenda no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-[#A8A29E]">
                <span>Atendimento humanizado</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="hover:text-rose-600 transition-colors"
                >
                  Esvaziar bandeja
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
