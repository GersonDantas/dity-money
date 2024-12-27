import { Header } from "../../components/Header";
import { Summary } from '../../components/Summary';
import { PriceHighlight, TransactionsTable } from './styles';
import { TransactionsContainer } from './styles';
import { SearchForm } from './components/SearchForm';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../contexts/TransactionsContext/context';
import { dateFormatter, priceFormatter } from '../../utils/formatter';


export function Transactions () {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions)

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
                    {transaction.type === 'income' ?
                      priceFormatter.format(transaction.price) :
                      '- ' + priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

