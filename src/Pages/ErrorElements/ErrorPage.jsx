import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    console.log(error)
  return (
    <>
        <section className="h-full w-full bg-gray-900/45 text-white/20 grid place-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
    </>
  )
}

export default ErrorPage