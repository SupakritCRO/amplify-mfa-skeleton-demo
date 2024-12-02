
import ErrorFallback from '@/components/molecules/ErrorFallbackPage';
import React, { ErrorInfo, useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';

interface CustomErrorBoundaryProps {
  children: React.ReactNode;
}

const CustomErrorBoundary: React.FC<CustomErrorBoundaryProps> = ({ children }) => {
  const [errorInfo, setErrorInfo] = useState<string | null | undefined>(null);

  const handleError = (error: Error, info: ErrorInfo) => {
    // Store the errorInfo in state
    setErrorInfo(info.componentStack);
    // Optionally log the error and info to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, info);
  };

  const resetErrorBoundary = () => {
    setErrorInfo(null);
  };

  const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
    <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} errorInfo={errorInfo} />
  );

  return (
    <ReactErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={resetErrorBoundary}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default CustomErrorBoundary;
