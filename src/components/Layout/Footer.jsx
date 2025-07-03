import styled from 'styled-components';
import { themes, TMDB_ATTRIBUTION, APP_INFO } from '../../utils/constants';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 2.5rem 1rem;
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
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Attribution = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const Footer = ({ darkMode = false }) => {
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <div>
          <FooterText>
            &copy; {APP_INFO.year} {APP_INFO.name}. All rights reserved.
          </FooterText>
          <SocialLinks>
            <SocialLink
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/yourprofile"
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
        </div>
        <Attribution>
          {TMDB_ATTRIBUTION}
        </Attribution>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
