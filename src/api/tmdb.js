import axios from 'axios';

export const apiKey = 'YOUR_TMDB_API_KEY'; // 🔑 Replace with your TMDB key

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
    language: 'en-US',
  },
});

export default tmdb;
