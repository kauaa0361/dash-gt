import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para indicar que ocorreu um erro.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em algum serviço de relatórios de erros
    console.log('Erro:', error);
    console.log('Informações do erro:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Personaliza a saída do erro
      return <h1>Ocorreu um erro inesperado.</h1>;
    }

    // Renderiza o conteúdo do componente filho
    return this.props.children;
  }
}

export default ErrorBoundary;
