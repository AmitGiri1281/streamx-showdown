import styled from 'styled-components'
import { useTheme } from '@context/ThemeContext'
import Button from "../UI/Button";
import { FiSun, FiMoon } from 'react-icons/fi'

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ThemeToggle = styled(Button)`
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <HeaderContainer>
      <Logo>
        Stream<span>X</span>
      </Logo>
      <ThemeToggle variant="text" onClick={toggleTheme}>
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
