import { useEffect, useState } from 'react';
import { TransactionsContext } from './context';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const url = new URL('http://localhost:3333/transactions');
    if (query) {
      url.searchParams.append('q', query);
    }
    const response = await fetch(url)
    const data = await response.json()
    setTransactions(data)
    return data
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}
