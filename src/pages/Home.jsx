import { useEffect, useState } from 'react'
import { useMovies } from '@/context/MovieContext'
import Banner from '@/components/Banner'
import MovieRow from '@/components/MovieRow'
import GenreFilter from '@/components/GenreFilter'
import SearchBar from '@/components/SearchBar'
import TrailerModal from '@/components/TrailerModal'
import * as S from './Home.styles'

const Home = () => {
  const {
    movies,
    featuredMovie,
    getTrendingMovies,
    searchQuery,
    setSearchQuery,
    selectedGenres,
    isLoading,
    getMovieDetails
  } = useMovies()

  const [trailerKey, setTrailerKey] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlayTrailer = async (movieId) => {
    try {
      const details = await getMovieDetails(movieId)
      const trailer = details?.videos?.results?.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      )

      if (trailer) {
        setTrailerKey(trailer.key)
        setIsModalOpen(true)
      } else {
        alert('No trailer available for this movie.')
      }
    } catch (error) {
      console.error('Error fetching trailer:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTrailerKey(null)
  }

  useEffect(() => {
    if (!searchQuery && selectedGenres.length === 0) {
      getTrendingMovies()
    }
  }, [searchQuery, selectedGenres, getTrendingMovies])

  return (
    <S.HomeContainer>
      {featuredMovie && (
        <Banner movie={featuredMovie} onPlayTrailer={handlePlayTrailer} />
      )}
      <S.MainContent>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <GenreFilter />
        {isLoading ? (
          <S.LoadingContainer>
            {[...Array(6)].map((_, i) => (
              <MovieRow.Skeleton key={i} />
            ))}
          </S.LoadingContainer>
        ) : (
          <MovieRow
            movies={movies}
            title={searchQuery ? 'Search Results' : 'Trending Now'}
          />
        )}
      </S.MainContent>

      {isModalOpen && trailerKey && (
        <TrailerModal videoKey={trailerKey} onClose={closeModal} />
      )}
    </S.HomeContainer>
  )
}

export default Home
