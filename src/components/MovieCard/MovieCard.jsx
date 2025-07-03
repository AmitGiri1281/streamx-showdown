import PropTypes from 'prop-types'
import * as S from './MovieCard.styles'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie, onClick }) => {
  const navigate = useNavigate()
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : '/placeholder-poster.jpg'

  const handleClick = () => {
    if (onClick) {
      onClick(movie)
    } else {
      navigate(`/movie/${movie.id}`)
    }
  }

  return (
    <S.MovieCardContainer onClick={handleClick}>
      <S.MoviePoster src={posterUrl} alt={movie.title} />
      <S.MovieInfo>
        <S.MovieTitle>{movie.title}</S.MovieTitle>
        <S.MovieYear>
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </S.MovieYear>
      </S.MovieInfo>
    </S.MovieCardContainer>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default MovieCard


