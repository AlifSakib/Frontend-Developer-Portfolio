import React, { useState } from 'react';
import { ShoppingBag, Star, Plus, Minus, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  tag?: string;
}

const DEMO_PRODUCTS: ProductItem[] = [
  { id: 1, name: 'Minimalist Mechanical Keyboard', category: 'Gear', price: 149, rating: 4.9, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', tag: 'Best Seller' },
  { id: 2, name: 'Studio Monitor Noise-Canceling ANC', category: 'Audio', price: 289, rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Ergonomic Developer Desk Lamp', category: 'Workspace', price: 89, rating: 4.7, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80', tag: 'Sale' },
  { id: 4, name: 'Matte Black Aluminum Laptop Stand', category: 'Workspace', price: 59, rating: 4.9, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80' },
];

export const EcommerceDemo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<{ product: ProductItem; quantity: number }[]>([
    { product: DEMO_PRODUCTS[0], quantity: 1 }
  ]);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const filtered = selectedCategory === 'All'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter(p => p.category === selectedCategory);

  const addToCart = (product: ProductItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 md:p-6 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Nexus Commerce Interactive Sandbox
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Live store prototype with reactive cart state & calculations</p>
        </div>

        <div className="flex items-center gap-2">
          {['All', 'Gear', 'Audio', 'Workspace'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Products Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map(product => (
            <div
              key={product.id}
              className="group border border-slate-200 dark:border-slate-800 rounded-lg p-3 flex flex-col justify-between hover:shadow-md transition-shadow bg-slate-50/50 dark:bg-slate-800/40"
            >
              <div className="relative aspect-video rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded">
                    {product.tag}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>{product.category}</span>
                  <span className="flex items-center gap-1 text-amber-500 font-medium">
                    <Star className="w-3 h-3 fill-amber-500" /> {product.rating}
                  </span>
                </div>
                <h5 className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-1 mb-2">
                  {product.name}
                </h5>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="font-bold text-base text-slate-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Cart Sidebar */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50 dark:bg-slate-800/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
              <span className="font-bold text-sm text-slate-900 dark:text-white">Live Cart Drawer</span>
              <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full font-bold">
                {cart.reduce((acc, c) => acc + c.quantity, 0)} items
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs">
                Your cart is empty. Click "+ Add" on any item!
              </div>
            ) : (
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {cart.map(item => (
                  <div key={item.product.id} className="flex items-center justify-between text-xs bg-white dark:bg-slate-900 p-2 rounded border border-slate-100 dark:border-slate-800">
                    <div className="flex-1 min-w-0 pr-2">
                      <p className="font-medium text-slate-800 dark:text-slate-200 truncate">{item.product.name}</p>
                      <p className="text-slate-500 font-bold">${item.product.price * item.quantity}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="p-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-1.5 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="p-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 ml-1"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mt-4">
            <div className="flex justify-between text-xs mb-1 text-slate-500">
              <span>Subtotal:</span>
              <span className="font-bold text-slate-900 dark:text-white">${subtotal}</span>
            </div>
            <div className="flex justify-between text-xs mb-3 text-slate-500">
              <span>Shipping:</span>
              <span className="text-emerald-600 font-bold">FREE</span>
            </div>

            {isCheckoutSuccess ? (
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded text-center text-xs text-emerald-700 dark:text-emerald-300 font-medium flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Order Processed Successfully!
              </div>
            ) : (
              <button
                disabled={cart.length === 0}
                onClick={() => {
                  setIsCheckoutSuccess(true);
                  setTimeout(() => {
                    setIsCheckoutSuccess(false);
                    setCart([]);
                  }, 2500);
                }}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                Checkout Now (${subtotal}) <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
