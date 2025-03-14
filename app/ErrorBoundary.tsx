// "use client"

// import React, { Component, ReactNode } from 'react';

// type ErrorBoundaryProps = {
//     children: ReactNode;
// };

// type ErrorBoundaryState = {
//     hasError: boolean;
// };

// class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//     constructor(props: ErrorBoundaryProps) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(): ErrorBoundaryState {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }

//     componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//         // You can also log the error to an error reporting service
//         console.error('ErrorBoundary caught an error', error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return <h1 className='text-center m-5'>Something went wrong.</h1>;
//         }

//         return this.props.children;
//     }
// }

// export default ErrorBoundary;

"use client";

import React, { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
    showDetails: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            showDetails: false,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error: error,
            errorInfo: null, // Dodano errorInfo: null
            showDetails: false, // Dodano showDetails: false
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ errorInfo });
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    toggleDetails = () => {
        this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center m-5">
                    <h1 className="text-xl font-semibold mb-2">Something went wrong.</h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={this.toggleDetails}
                    >
                        {this.state.showDetails ? 'Hide Details' : 'Show Details'}
                    </button>
                    {this.state.showDetails && this.state.error && this.state.errorInfo && (
                        <div className="mt-4 text-left">
                            <p><strong>Error Message:</strong> {this.state.error.message}</p>
                            <p><strong>Component Stack:</strong></p>
                            <pre className="bg-gray-100 p-2 rounded">{this.state.errorInfo.componentStack}</pre>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;