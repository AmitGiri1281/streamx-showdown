import axios from 'axios'

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
})

export const fetchTrendingMovies = async (timeWindow = 'week') => {
  try {
    const response = await tmdbApi.get(`/trending/movie/${timeWindow}`)
    return response.data.results
  } catch (error) {
    console.error('Error fetching trending movies:', error)
    throw error
  }
}

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await tmdbApi.get('/discover/movie', {
      params: {
        with_genres: genreId,
      },
    })
    return response.data.results
  } catch (error) {
    console.error('Error fetching movies by genre:', error)
    throw error
  }
}

export const fetchMovieGenres = async () => {
  try {
    const response = await tmdbApi.get('/genre/movie/list')
    return response.data.genres
  } catch (error) {
    console.error('Error fetching movie genres:', error)
    throw error
  }
}

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'videos',
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    throw error
  }
}

export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get('/search/movie', {
      params: {
        query,
      },
    })
    return response.data.results
  } catch (error) {
    console.error('Error searching movies:', error)
    throw error
  }
}