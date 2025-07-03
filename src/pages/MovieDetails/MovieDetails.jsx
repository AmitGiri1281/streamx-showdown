import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMovies } from '@/context/MovieContext'
import { FaArrowLeft, FaStar, FaPlay, FaImdb } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import * as S from './MovieDetails.styles'
import MovieCard from '@/components/MovieCard'
import Loader from '@/components/UI/Loader'

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getMovieDetails, getMovieTrailer } = useMovies()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMovie()
  }, [id, getMovieDetails])

  if (loading) return <Loader fullScreen />
  if (error) return <div>Error: {error}</div>
  if (!movie) return <div>Movie not found</div>

  const trailerUrl = getMovieTrailer(movie)

  return (
    <S.DetailsContainer>
      <S.BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </S.BackButton>

      <S.HeroSection backdrop={movie.backdrop_path}>
        <S.HeroContent>
          <S.PosterContainer>
            <S.Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </S.PosterContainer>
          <S.InfoContainer>
            <S.Title>
              {movie.title} <S.Year>({new Date(movie.release_date).getFullYear()})</S.Year>
            </S.Title>
            <S.MetaData>
              <S.Rating>
                <FaStar color="gold" /> {movie.vote_average.toFixed(1)}/10
              </S.Rating>
              <S.Runtime>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</S.Runtime>
              <S.ImdbLink 
                href={`https://www.imdb.com/title/${movie.imdb_id}`} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaImdb size={24} color="#F5C518" />
              </S.ImdbLink>
            </S.MetaData>
            <S.Tagline>{movie.tagline}</S.Tagline>
            <S.Overview>{movie.overview}</S.Overview>
            <S.Genres>
              {movie.genres.map(genre => (
                <S.Genre key={genre.id}>{genre.name}</S.Genre>
              ))}
            </S.Genres>
            {trailerUrl && (
              <S.TrailerButton onClick={() => setShowTrailer(true)}>
                <FaPlay /> Play Trailer
              </S.TrailerButton>
            )}
          </S.InfoContainer>
        </S.HeroContent>
      </S.HeroSection>

      {movie.similar?.results?.length > 0 && (
        <S.SimilarSection>
          <S.SectionTitle>Similar Movies</S.SectionTitle>
          <S.SimilarMovies>
            {movie.similar.results.slice(0, 6).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </S.SimilarMovies>
        </S.SimilarSection>
      )}

      {showTrailer && trailerUrl && (
        <S.TrailerModal onClick={() => setShowTrailer(false)}>
          <S.TrailerContent onClick={e => e.stopPropagation()}>
            <S.CloseButton onClick={() => setShowTrailer(false)}>×</S.CloseButton>
            <ReactPlayer
              url={trailerUrl}
              width="100%"
              height="100%"
              controls
              playing
            />
          </S.TrailerContent>
        </S.TrailerModal>
      )}
    </S.DetailsContainer>
  )
}

export default MovieDetails