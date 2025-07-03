import { Component } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h2>Something went wrong.</h2>
          <p>We're sorry for the inconvenience.</p>
          <Button onClick={this.handleRetry}>Try Again</Button>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary