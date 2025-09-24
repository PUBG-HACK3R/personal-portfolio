'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl text-center">
        <motion.div
          className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: 2 }}
        >
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </motion.div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We encountered an unexpected error. Don&apos;t worry, it&apos;s not your fault!
        </p>
        
        {process.env.NODE_ENV === 'development' && error && (
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm font-mono text-red-600 dark:text-red-400 break-all">
              {error.message}
            </p>
          </div>
        )}
        
        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={resetError}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
          
          <motion.button
            onClick={() => window.location.reload()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reload Page
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ErrorBoundary;
