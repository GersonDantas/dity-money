import { useCallback, useEffect, useState } from 'react';
import { TransactionsContext } from './context';
import { api } from '../../lib/axios';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export type CreateTransactionInput = {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
};

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query,
      }
    })

    setTransactions(response.data)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [])

  const createTransaction = useCallback(async ({ description, price, category, type }: CreateTransactionInput) => {
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions(state => [response.data, ...state])
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}
