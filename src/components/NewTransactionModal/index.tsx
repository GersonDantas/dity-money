import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type NewTransactionFormData = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
});

export function NewTransactionModal () {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  const handleCreateNewTransaction = async (data: NewTransactionFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" placeholder="Descrição" required {...register('description')} />
          <input type="number" placeholder="Preço" required {...register('price')} />
          <input type="text" placeholder="Categoria" required {...register('category')} />

          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
