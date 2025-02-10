import React, { Component, ErrorInfo } from 'react';

const CustomErrorPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f9f6f0] text-[#2c2820]">
    <div className="text-center bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
      <h1 className="text-4xl font-bold text-[#e5e1d8] mb-4">Something went wrong...</h1>
      <p className="text-lg text-[#5c5648] mb-6">Please try to reload the page or go back.</p>

      <div className="space-x-4">
        {/* Кнопка для перезагрузки страницы */}
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 text-white bg-[#34a798] rounded-md hover:bg-[#28a485] transition duration-300 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Reboot
        </button>

        {/* Кнопка для возврата назад */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 text-[#34a798] border-2 border-[#34a798] rounded-md hover:bg-[#34a798] hover:text-white transition duration-300 focus:outline-none focus:ring focus:ring-violet-300"
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
