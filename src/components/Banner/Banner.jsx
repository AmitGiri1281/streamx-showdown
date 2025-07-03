import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Banner.styles'
import { Button } from '@components/UI'

const Banner = ({ movie, onPlayTrailer }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (movie) {
      setLoaded(false)
    }
  }, [movie])

  if (!movie) return null

  const backgroundImageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : '/placeholder-backdrop.jpg'

  const handleImageLoad = () => {
    setLoaded(true)
  }

  return (
    <S.BannerContainer>
      <S.BackdropImage
        src={backgroundImageUrl}
        alt={movie.title}
        onLoad={handleImageLoad}
        $loaded={loaded}
      />
      <S.BannerContent $loaded={loaded}>
        <S.BannerTitle>{movie.title}</S.BannerTitle>
        <S.BannerOverview>{movie.overview}</S.BannerOverview>
        <S.BannerActions>
          <Button $variant="primary" onClick={() => onPlayTrailer(movie.id)}>
  Play Trailer
</Button>

        </S.BannerActions>
      </S.BannerContent>
    </S.BannerContainer>
  )
}

Banner.propTypes = {
  movie: PropTypes.object,
  onPlayTrailer: PropTypes.func.isRequired,
}

export default Banner