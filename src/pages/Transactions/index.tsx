import { Header } from "../../components/Header";
import { Summary } from '../../components/Summary';
import { PriceHighlight } from './styles';
import { TransactionsContainer } from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.100,00</PriceHighlight>
              </td>
            </tr>
            <tr>
              <td>carro</td>
              <td>
                <PriceHighlight variant="income">R$ 50.000,00</PriceHighlight>
              </td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  )
}
