import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Erro:', error);
    console.log('Informações do erro:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ocorreu um erro inesperado.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
