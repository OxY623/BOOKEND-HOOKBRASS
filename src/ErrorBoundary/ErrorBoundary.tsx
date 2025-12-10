import React, { Component, ErrorInfo } from 'react';

const CustomErrorPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f9f6f0] text-[#2c2820]">
    <div className="text-center bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
      <h1 className="text-4xl font-bold text-[#34a798] mb-4">Something went wrong...</h1>
      <p className="text-lg text-[#34a798] mb-6">Please try to reload the page or go back.</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Кнопка для перезагрузки страницы */}
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-light tracking-wide text-white bg-[#34a798] hover:bg-[#2a8a7a] dark:hover:bg-[#2a8a7a] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
        >
          Reboot
        </button>

        {/* Кнопка для возврата назад */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-light tracking-wide text-[#34a798] border-2 border-[#34a798] rounded-lg hover:bg-[#34a798] hover:text-white dark:hover:bg-[#34a798] dark:hover:text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
        >
          Go back
        </button>
      </div>
    </div>
  </div>
);

class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновляем состояние, чтобы следующий рендер показал fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <CustomErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
