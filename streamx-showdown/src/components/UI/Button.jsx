import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: ${({ $size }) => ($size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem')};
  border-radius: 4px;
  border: none;
  font-size: ${({ $size }) => ($size === 'small' ? '0.875rem' : '1rem')};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.primaryDark};
          }
        `
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text};
          &:hover {
            background-color: ${theme.colors.secondaryDark};
          }
        `
      case 'text':
        return `
          background-color: transparent;
          color: ${theme.colors.text};
          &:hover {
            text-decoration: underline;
          }
        `
      default:
        return `
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};
          &:hover {
            background-color: ${theme.colors.backgroundLight};
          }
        `
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

// ✅ Use default values via destructuring
const Button = ({ children, variant = 'default', size = 'medium', ...rest }) => (
  <StyledButton $variant={variant} $size={size} {...rest}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'text', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
}

export default Button
