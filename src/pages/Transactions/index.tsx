import { Header } from "../../components/Header";
import { Summary } from '../../components/Summary';
import { PriceHighlight, TransactionsTable } from './styles';
import { TransactionsContainer } from './styles';
import { SearchForm } from './components/SearchForm';
export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/12/2022</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.100,00</PriceHighlight>
              </td>
              <td>Aluguel</td>
              <td>13/12/2022</td>
            </tr>
            <tr>
              <td width="50%">carro</td>
              <td>
                <PriceHighlight variant="income">R$ 50.000,00</PriceHighlight>
              </td>
              <td>carro</td>
              <td>13/12/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
