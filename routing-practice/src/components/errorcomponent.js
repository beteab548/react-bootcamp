import { useRouteError } from "react-router-dom";

function ErrorDisplay() {
  const error = useRouteError();
  console.log(error.status);
  let message;
  if (error.status === 500) {
    message = "server is not working";
  }
  if (error.status === 404) {
    message = "page not found";
  }
  return (
    <div>
      <p>an error occured!</p>
      <p>{message}</p>
    </div>
  );
}
export default ErrorDisplay;
