// src/services/youtube.js

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // ✅ Use env variable
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

/**
 * Fetches the YouTube trailer URL for a given movie title.
 * @param {string} title - The title of the movie.
 * @returns {Promise<string|null>} - YouTube trailer embed URL or null.
 */
export const getYouTubeTrailerUrl = async (title) => {
  try {
    const query = `${title} official trailer`;
    const response = await fetch(
      `${BASE_URL}?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&key=${API_KEY}&type=video`
    );

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0]?.id?.videoId;
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return null; // No trailer found
  } catch (error) {
    console.error('Error fetching trailer from YouTube:', error.message);
    return null;
  }
};
