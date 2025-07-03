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
    const url = `${BASE_URL}?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&key=${API_KEY}&type=video`;
    
    console.log('Request URL:', url); // Log the request URL
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('YouTube API Response:', data); // Log full response
    
    if (data.items && data.items.length > 0) {
      const videoId = data.items[0]?.id?.videoId;
      console.log('Found Video ID:', videoId); // Log the video ID
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        console.log('Embed URL:', embedUrl); // Log the embed URL
        return embedUrl;
      }
    }
    return null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};