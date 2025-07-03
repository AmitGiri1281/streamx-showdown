// import PropTypes from 'prop-types'
// import * as S from './MovieCard.styles'
// import { useNavigate } from 'react-router-dom'

// const MovieCard = ({ movie, onClick }) => {
//   const navigate = useNavigate()
//   const posterUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//     : '/placeholder-poster.jpg'

//   const handleClick = () => {
//     if (onClick) {
//       onClick(movie)
//     } else {
//       navigate(`/movie/${movie.id}`)
//     }
//   }

//   return (
//     <S.MovieCardContainer onClick={handleClick}>
//       <S.MoviePoster src={posterUrl} alt={movie.title} />
//       <S.MovieInfo>
//         <S.MovieTitle>{movie.title}</S.MovieTitle>
//         <S.MovieYear>
//           {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
//         </S.MovieYear>
//       </S.MovieInfo>
//     </S.MovieCardContainer>
//   )
// }

// MovieCard.propTypes = {
//   movie: PropTypes.object.isRequired,
//   onClick: PropTypes.func,
// }

// export default MovieCard







import PropTypes from 'prop-types'
import * as S from './MovieCard.styles'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const AnimatedCard = styled(S.MovieCardContainer)`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  transform: ${(props) => (props.$inView ? 'scale(1)' : 'scale(0.95)')};
  transition: all 0.6s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`

const MovieCard = ({ movie, onClick }) => {
  const navigate = useNavigate()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

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
    <AnimatedCard ref={ref} onClick={handleClick} $inView={inView}>
      <S.MoviePoster src={posterUrl} alt={movie.title} />
      <S.MovieInfo>
        <S.MovieTitle>{movie.title}</S.MovieTitle>
        <S.MovieYear>
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </S.MovieYear>
      </S.MovieInfo>
    </AnimatedCard>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default MovieCard


