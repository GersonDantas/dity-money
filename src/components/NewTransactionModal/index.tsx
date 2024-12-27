import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionsContext/context';

type NewTransactionFormData = {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
};

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.string(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

export function NewTransactionModal () {
  const createTransaction = useContextSelector(TransactionsContext, (context) => context.createTransaction)
  const { control, register, handleSubmit, formState: { isSubmitting, errors}, reset } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  });

  console.log(errors)

  const handleCreateNewTransaction = async ({ description, price, category, type }: NewTransactionFormData) => {
    await createTransaction({ description, price, category, type })
    reset()
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

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
