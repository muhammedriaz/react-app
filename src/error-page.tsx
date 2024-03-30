import { useRouteError } from "react-router-dom";

interface RouteError {
    message: string;
    status: number;
    statusText: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Error {error.status}!</h1>
            <p>Page {error.statusText || error.message}</p>
            <p>
                <i></i>
            </p>
        </div>
    );
}