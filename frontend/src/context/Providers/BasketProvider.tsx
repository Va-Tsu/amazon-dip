/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { BasketItem } from "../../types/product";
import { addToBasket, getBasket, removeFromBasket } from "../../api/basket";
 

type BasketContextType = {
  basket: BasketItem[],
  addItem: (item: BasketItem) => Promise<void>,
  removeItem: (id: string) => Promise<void>,
  fetchBasket: () => Promise<void>,
}

export const BasketContext = createContext<BasketContextType | null>(null);

export function BasketProvider({ children }: { children: React.ReactNode }) {

  const [basket, setBasket] = useState<BasketItem[]>([]);

    async function fetchBasket() {
      const token = localStorage.getItem('token') ?? '';
      const items = await getBasket(token);
      setBasket(items);
    }

  async function addItem(item: BasketItem) {
    const token = localStorage.getItem('token') ?? '';
    await addToBasket(item.id, token);   
    setBasket(prev => [...prev, item]);
  }

  async function removeItem(id: string) {
    const token = localStorage.getItem('token') ?? '';
    await removeFromBasket(id, token);
    setBasket(prev => prev.filter(item => item.id !== id))
  }

  return (
    <BasketContext.Provider value={{ basket, addItem, removeItem, fetchBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);

  if (!context) {
    throw new Error("useBasket must be used inside BasketProvider")
  }

  return context;
}