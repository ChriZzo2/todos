interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <p className="text-red-500">Error: {message}</p>
    </div>
  );
}