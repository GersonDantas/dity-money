import { MagnifyingGlass } from '@phosphor-icons/react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../../../contexts/TransactionsContext/context';

const searchFormsSchema = z.object({
  query: z.string(),
})

type SearchFormsData = z.infer<typeof searchFormsSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormsData>({
    resolver: zodResolver(searchFormsSchema),
  })

  const handleSearchTransactions = async (data: SearchFormsData) => {
    const response = await fetchTransactions(data.query)
    console.log(response)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
