import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div
      id="error-page"
      className="flex items-center flex-col  gap-2 h-[calc(100vh-100px)] justify-center"
    >
      <h1 className="text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={refreshPage}
        className="bg-blue-600 p-2 px-4 rounded-md capitalize text-white"
      >
        refreshPage
      </button>
    </div>
  );
}
