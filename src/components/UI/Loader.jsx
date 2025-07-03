import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderContainer = styled.div`
  display: inline-block;
  width: ${({ size }) => size || '40px'};
  height: ${({ size }) => size || '40px'};
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`

const Loader = ({ size }) => {
  return <LoaderContainer size={size} />
}

export default Loader