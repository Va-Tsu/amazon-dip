import { BasketProvider } from "./Providers/BasketProvider";

export function Providers({children} : {children: React.ReactNode}) {
  return (
    <BasketProvider>
      {children}
    </BasketProvider>
  );
}