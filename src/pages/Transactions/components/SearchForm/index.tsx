import { MagnifyingGlass } from '@phosphor-icons/react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const searchFormsSchema = z.object({
  query: z.string(),
})

type SearchFormsData = z.infer<typeof searchFormsSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormsData>({
    resolver: zodResolver(searchFormsSchema),
  })

  const handleSearchTransactions = async (data: SearchFormsData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
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
