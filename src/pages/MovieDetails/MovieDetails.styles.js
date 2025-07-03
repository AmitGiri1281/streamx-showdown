import styled from 'styled-components'

export const DetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: brightness(0.3);
  z-index: 0;
`

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

export const Poster = styled.img`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 200px;
    margin: 0 auto;
  }
`

export const DetailsContent = styled.div`
  flex: 1;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`

export const Year = styled.span`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Tagline = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const MetaData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: bold;
`

export const Runtime = styled.span``

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Genre = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`

export const Overview = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 800px;
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  text-align: center;
`