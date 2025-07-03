import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 60vh;
  }
`

export const BackdropImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  transition: opacity 0.5s ease;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 2rem;
  color: white;
  text-align: center;
  transition: opacity 0.5s ease;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`

export const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const BannerOverview = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1rem;
    -webkit-line-clamp: 4;
  }
`

export const BannerActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`