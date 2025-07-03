import { createContext, useContext, useState, useEffect } from 'react'
import {
  fetchTrendingMovies,
  fetchMoviesByGenre,
  fetchMovieGenres,
  fetchMovieDetails,
  searchMovies,
} from '@services/tmdb'

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoading(true)
        const [genresData, trendingMovies] = await Promise.all([
          fetchMovieGenres(),
          fetchTrendingMovies(),
        ])

        setGenres(genresData)
        setMovies(trendingMovies)
        setFeaturedMovie(trendingMovies[0])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    initializeData()
  }, [])

  useEffect(() => {
    if (selectedGenre) {
      const fetchGenreMovies = async () => {
        try {
          setIsLoading(true)
          const genreMovies = await fetchMoviesByGenre(selectedGenre)
          setMovies(genreMovies)
        } catch (err) {
          setError(err.message)
        } finally {
          setIsLoading(false)
        }
      }

      fetchGenreMovies()
    }
  }, [selectedGenre])

  useEffect(() => {
    if (searchQuery) {
      const searchMoviesByQuery = async () => {
        try {
          setIsLoading(true)
          const searchResults = await searchMovies(searchQuery)
          setMovies(searchResults)
        } catch (err) {
          setError(err.message)
        } finally {
          setIsLoading(false)
        }
      }

      const timer = setTimeout(() => {
        searchMoviesByQuery()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [searchQuery])

  const getMovieDetails = async (movieId) => {
    try {
      setIsLoading(true)
      const details = await fetchMovieDetails(movieId)
      return details
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const resetToTrending = async () => {
    try {
      setIsLoading(true)
      const trendingMovies = await fetchTrendingMovies()
      setMovies(trendingMovies)
      setSelectedGenre(null)
      setSearchQuery('')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MovieContext.Provider
      value={{
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
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovies = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovies must be used within a MovieProvider')
  }
  return context
}
