import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from './Button'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('i.visuallss render error:', error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <div className="min-h-dvh flex flex-col items-center justify-center gap-4 px-4 bg-bg-primary text-text-main text-center">
          <h1 className="font-serif-display text-2xl text-accent">
            Something went wrong
          </h1>
          <p className="text-sm text-text-secondary max-w-md">{error.message}</p>
          <Button onClick={() => window.location.assign('/')}>Return to Home</Button>
        </div>
      )
    }
    return this.props.children
  }
}