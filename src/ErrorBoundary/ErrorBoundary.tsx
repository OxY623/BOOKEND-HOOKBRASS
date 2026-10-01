import { Component, ErrorInfo } from "react";
import { BoundaryButton } from "../shared/ui/BoundaryButton/BoundaryButton";
const CustomErrorPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f9f6f0] text-[#2c2820]">
    <div className="text-center bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
      <h1 className="text-4xl font-bold text-[#34a798] mb-4">
        Something went wrong...
      </h1>
      <p className="text-lg text-[#34a798] mb-6">
        Please try to reload the page or go back.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Кнопка для перезагрузки страницы */}
        <BoundaryButton onClick={() => window.location.reload()}>
          Reboot
        </BoundaryButton>
        {/* Кнопка для возврата назад */}
        <BoundaryButton onClick={() => window.history.back()}>
          Go back
        </BoundaryButton>
      </div>
    </div>
  </div>
);

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: Error) {
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
