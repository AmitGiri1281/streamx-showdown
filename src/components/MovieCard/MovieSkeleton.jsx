import styled from 'styled-components'

const SkeletonCard = styled.div`
  width: 100%;
  aspect-ratio: 2/3;
  background-color: #333;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

const MovieSkeleton = () => {
  return <SkeletonCard />
}

export default MovieSkeleton