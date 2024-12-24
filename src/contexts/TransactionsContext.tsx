import { createContext, useEffect, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}
