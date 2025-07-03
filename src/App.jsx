// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from '@context/MovieContext';
import { ThemeProvider } from '@context/ThemeContext';
import Home from '@pages/Home/Home';
import MovieDetails from '@pages/MovieDetails/MovieDetails';
import NotFound from '@pages/NotFound/NotFound'; // Use alias path for consistency
import Layout from '@components/Layout/Layout';
import GlobalStyles from './GlobalStyles';
// Optional: Fonts if you're using fonts.css separately
import './styles/fonts.css';

const App = () => {
  return (
    <ThemeProvider>
      <MovieProvider>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </MovieProvider>
    </ThemeProvider>
  );
};

export default App;
