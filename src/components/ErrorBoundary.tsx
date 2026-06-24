import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="text-foreground/60">{this.state.error?.message}</p>
          <button
            className="px-4 py-2 rounded-xl bg-primary text-white"
            onClick={() => { this.setState({ hasError: false, error: null }); }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
