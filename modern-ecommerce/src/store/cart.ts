import create from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    const newItems = existingItem
      ? state.items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i)
      : [...state.items, item];
    const newTotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items: newItems, total: newTotal };
  }),
  removeItem: (id) => set((state) => {
    const newItems = state.items.filter(item => item.id !== id);
    const newTotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items: newItems, total: newTotal };
  }),
  updateQuantity: (id, quantity) => set((state) => {
    const newItems = state.items.map(item => item.id === id ? { ...item, quantity } : item);
    const newTotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items: newItems, total: newTotal };
  }),
  clearCart: () => set({ items: [], total: 0 }),
}));

export default useCartStore;