import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();

    console.log(error);

  return (
    <div>
        <h1>Oops!</h1>
        <p>Temos um problema!</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
}
