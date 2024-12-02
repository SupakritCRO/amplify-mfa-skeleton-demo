import React from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: string | null | undefined;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary, errorInfo }) => {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700 rounded">
      <h2 className="text-xl font-bold">Something went wrong:</h2>
      <p>Please contact the administrator.</p>
      <pre className="mt-2">{error.message}</pre>
      {errorInfo && (
        <details style={{ whiteSpace: 'pre-wrap' }} className="mt-4">
          <summary className="font-semibold cursor-pointer">Component Stack Trace</summary>
          {errorInfo}
        </details>
      )}
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
