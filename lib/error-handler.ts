/**
 * Error handling utilities
 */

export interface ErrorInfo {
  message: string;
  code?: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

/**
 * Safely executes an async function and returns a result object
 * instead of throwing an error
 */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  fallback?: T,
  errorContext?: Record<string, unknown>
): Promise<{ data: T | null; error: ErrorInfo | null }> {
  try {
    const data = await fn();
    return { data, error: null };
  } catch (error) {
    const errorInfo: ErrorInfo = {
      message: error instanceof Error ? error.message : "Unknown error occurred",
      code: error instanceof Error && "code" in error ? String(error.code) : undefined,
      context: errorContext,
      timestamp: new Date().toISOString(),
    };

    console.error("Safe async error:", errorInfo);

    // TODO: Send to error tracking service
    // Example: Sentry.captureException(error, { extra: errorContext });

    return {
      data: fallback ?? null,
      error: errorInfo,
    };
  }
}

/**
 * Safely executes a synchronous function and returns a result object
 */
export function safeSync<T>(
  fn: () => T,
  fallback?: T,
  errorContext?: Record<string, unknown>
): { data: T | null; error: ErrorInfo | null } {
  try {
    const data = fn();
    return { data, error: null };
  } catch (error) {
    const errorInfo: ErrorInfo = {
      message: error instanceof Error ? error.message : "Unknown error occurred",
      code: error instanceof Error && "code" in error ? String(error.code) : undefined,
      context: errorContext,
      timestamp: new Date().toISOString(),
    };

    console.error("Safe sync error:", errorInfo);

    return {
      data: fallback ?? null,
      error: errorInfo,
    };
  }
}

/**
 * Formats error for user-friendly display
 */
export function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "An unexpected error occurred";
}

