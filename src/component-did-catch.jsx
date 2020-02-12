import React, { Component } from 'react';

class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { error };
  }

  state = {
    error: null
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (!error) {
      return children;
    }

    return (
      <section>
        <h1>Error</h1>
        <p>{error?.message}</p>
      </section>
    );
  }
}

export default ErrorBoundary;
