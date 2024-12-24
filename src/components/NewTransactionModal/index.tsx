import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowDown, ArrowUp, X } from '@phosphor-icons/react';

export function NewTransactionModal () {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowUp />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome">
              <ArrowDown />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
