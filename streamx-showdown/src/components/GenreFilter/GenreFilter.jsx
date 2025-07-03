import PropTypes from 'prop-types'
import * as S from './GenreFilter.styles'
import { Button } from '@components/UI'

const GenreFilter = ({ genres, selectedGenre, onSelectGenre, onReset }) => {
  return (
    <S.GenreFilterContainer>
      <Button
        variant={!selectedGenre ? 'primary' : 'secondary'}
        onClick={onReset}
        size="small"
      >
        All
      </Button>
      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant={selectedGenre === genre.id ? 'primary' : 'secondary'}
          onClick={() => onSelectGenre(genre.id)}
          size="small"
        >
          {genre.name}
        </Button>
      ))}
    </S.GenreFilterContainer>
  )
}

GenreFilter.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenre: PropTypes.number,
  onSelectGenre: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default GenreFilter