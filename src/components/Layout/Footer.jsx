import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
`

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} StreamX Showdown. All data provided by
        TMDB.
      </FooterText>
    </FooterContainer>
  )
}

export default Footer