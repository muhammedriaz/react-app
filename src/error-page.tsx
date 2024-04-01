import {useRouteError} from "react-router-dom";

interface RouteError {
  message: string;
  status: number;
  statusText: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Error {error.status}!</h1>
      <p className="text-2xl">Page {error.statusText || error.message}</p>
    </div>
  );
}
