import styled from 'styled-components'

export const MovieCardContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  aspect-ratio: 2/3;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &:hover::after {
    opacity: 1;
  }
`

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${MovieCardContainer}:hover & {
    opacity: 1;
  }
`

export const MovieTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MovieYear = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  color: #ccc;
`