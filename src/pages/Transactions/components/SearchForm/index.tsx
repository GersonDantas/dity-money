import { MagnifyingGlass } from '@phosphor-icons/react';
import { SearchFormContainer } from './styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={24} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
