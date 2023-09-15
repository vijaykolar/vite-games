import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Heading } from "../components/chakra-ui";
import Navbar from "../components/navbar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <Heading>
        {isRouteErrorResponse(error)
          ? "This page is doesn't exist"
          : "Unexpected "}
      </Heading>
    </div>
  );
}

export default ErrorPage;
