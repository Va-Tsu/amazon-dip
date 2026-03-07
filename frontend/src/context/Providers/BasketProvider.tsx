/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { BasketItem } from "../../types/product";
 

type BasketContextType = {
  basket: BasketItem[],
  addItem: (item: BasketItem) => void,
  removeItem: (id: number) => void,
}

export const BasketContext = createContext<BasketContextType | null>(null);

export function BasketProvider({ children }: { children: React.ReactNode }) {

  const [basket, setBasket] = useState<BasketItem[]>([]);


  function addItem(item: BasketItem) {
    setBasket(prev => [...prev, item]);
  }

  function removeItem(id: number) {
    setBasket(prev => prev.filter(item => item.id !== id))
  }

  return (
    <BasketContext.Provider value={{ basket, addItem, removeItem }}>
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