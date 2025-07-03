import { useState } from 'react';
import { useMovies } from '@context/MovieContext';
import { useTheme } from '@context/ThemeContext';

import Banner from '@components/Banner';
import MovieCard from '@components/MovieCard';
import GenreFilter from '@components/GenreFilter';
import SearchBar from '@components/SearchBar';
import TrailerModal from '@components/TrailerModal/TrailerModal'; // ✅ Correct

import Loader from '@components/UI/Loader';

import * as S from './Home.styles';
import MovieSkeleton from '@components/MovieCard/MovieSkeleton';

const Home = () => {
  const {
    movies,
    featuredMovie,
    genres,
    selectedGenre,
    searchQuery,
    isLoading,
    error,
    setSelectedGenre,
    setSearchQuery,
    getMovieDetails,
    resetToTrending,
  } = useMovies()

  const { theme } = useTheme()
  const [trailerKey, setTrailerKey] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const handlePlayTrailer = async (movieId) => {
    try {
      const details = await getMovieDetails(movieId)
      const trailer = details.videos?.results?.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      )
      if (trailer) {
        setTrailerKey(trailer.key)
        setIsModalOpen(true)
      }
    } catch (err) {
      console.error('Error fetching trailer:', err)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTrailerKey(null)
  }

 if (error) {
  return (
    <S.ErrorContainer>
      <h2>Error loading movies</h2>
      <p>{error}</p>
      {isLoading ? (
        <Loader />
      ) : (
        <button onClick={resetToTrending}>Try Again</button>
      )}
    </S.ErrorContainer>
  )
}


  return (
    <S.HomeContainer data-theme={theme}>
      {featuredMovie && (
        <Banner movie={featuredMovie} onPlayTrailer={handlePlayTrailer} />
      )}

      <S.MainContent>
        <S.FilterSection>
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onSelectGenre={handleGenreSelect}
            onReset={resetToTrending}
          />
          <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
        </S.FilterSection>

        {searchQuery && (
          <S.SearchResultsHeader>
            Search Results for: "{searchQuery}"
          </S.SearchResultsHeader>
        )}

        {isLoading ? (
          <S.MovieGrid>
            {Array.from({ length: 10 }).map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
          </S.MovieGrid>
        ) : movies.length > 0 ? (
          <S.MovieGrid>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handlePlayTrailer(movie.id)}
              />
            ))}
          </S.MovieGrid>
        ) : (
          <S.NoResults>
            <h3>No movies found</h3>
            <Button onClick={resetToTrending}>Show Trending Movies</Button>
          </S.NoResults>
        )}
      </S.MainContent>

      {isModalOpen && trailerKey && (
        <TrailerModal videoKey={trailerKey} onClose={closeModal} />
      )}
    </S.HomeContainer>
  )
}

export default Home
