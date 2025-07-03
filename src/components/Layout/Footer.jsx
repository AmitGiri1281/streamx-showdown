import styled from 'styled-components';
import { themes, TMDB_ATTRIBUTION, APP_INFO } from '../../utils/constants';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// Styled Components
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 2rem 1rem;
  text-align: center;
  margin-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Attribution = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.7;
`;

// Component
const Footer = ({ darkMode = false }) => {
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <FooterText>
          &copy; {APP_INFO.year} {APP_INFO.name}. Made with ❤️ by Amit Giri.
        </FooterText>
        <SocialLinks>
          <SocialLink
            href="https://github.com/AmitGiri1281"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/amitgiri8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
      <Attribution>{TMDB_ATTRIBUTION}</Attribution>
    </FooterContainer>
  );
};

export default Footer;
