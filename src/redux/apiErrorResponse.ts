export interface ApiErrorResponse {
  status: number;
  data: {
    status: string;
    message: string;
    errorMessage: string;
    data: DataApiError[] | null;
  };
}
interface DataApiError {
  field: string;
  message: string;
}

export function isApiResponse(error: unknown): error is ApiErrorResponse {
  return (
    typeof error === "object" &&
    error != null &&
    "status" in error &&
    typeof (error as any).status === "number"
  );
}
