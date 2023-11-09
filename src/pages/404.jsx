import { useRouteError } from "react-router-dom";
import Button from "../Components/Elements/Button/Button";
import { Link } from "react-router-dom";

const PError = () => {
    return (
        <div className='flex justify-center flex-col bg-blue-200 min-h-screen items-center'>
        <h1 className="text-3xl p-10">Not Found !</h1>
        <Link to="/home"><Button>Home</Button></Link>
        </div>
    )
}

export default PError;
