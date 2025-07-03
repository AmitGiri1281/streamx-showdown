import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FiSearch, FiX } from 'react-icons/fi'
import * as S from './SearchBar.styles'
import { useDebounce } from '@hooks/useDebounce'

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery)
    } else {
      onClear()
    }
  }, [debouncedQuery, onSearch, onClear])

  const handleClear = () => {
    setQuery('')
    onClear()
  }

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <S.SearchIcon>
        <FiSearch />
      </S.SearchIcon>
      {query && (
        <S.ClearButton onClick={handleClear}>
          <FiX />
        </S.ClearButton>
      )}
    </S.SearchContainer>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default SearchBar