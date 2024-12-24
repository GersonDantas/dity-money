import { createContext } from 'react';
import { Transaction } from '.';

interface TransactionsContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);
