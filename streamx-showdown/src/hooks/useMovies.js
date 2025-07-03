import { useMovies } from '@context/MovieContext'

export const useMovieActions = () => {
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

  return {
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
  }
}