import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    const {status,statusText} = err
  return <div>
    <h1> OOPS!!</h1>
    <h2>Something went wrong!!</h2>
    <h2>{status  + " : " + statusText}</h2>
    <button><Link to="/"> Go To Home Click Here</Link></button> 
  </div>;
};

export default Error;
