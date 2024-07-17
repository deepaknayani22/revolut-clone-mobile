import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv-storage";

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  title: string;
}

export interface BalanceState {
  transactions: Array<Transaction>;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<BalanceState>()(
  persist(
    (set, get) => ({
      transactions: [],
      runTransaction: (transaction: Transaction) => {
        // Placeholder: Add your implementation later
      },
      balance: () => {
        // Placeholder: Add your implementation later
        return 0;
      },
      clearTransactions: () => {
        // Placeholder: Add your implementation later
      },
    }),
    {
      name: "balance",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
