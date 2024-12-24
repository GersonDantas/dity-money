import { Header } from "../../components/Header";
import { Summary } from '../../components/Summary';
import { PriceHighlight, TransactionsTable } from './styles';
import { TransactionsContainer } from './styles';
import { SearchForm } from './components/SearchForm';
import { useContext } from "react";
import { TransactionsContext } from '../../contexts/TransactionsContext/context';


export function Transactions () {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'income' ? 'R$ 12.000,00' : 'R$ 1.100,00'}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

