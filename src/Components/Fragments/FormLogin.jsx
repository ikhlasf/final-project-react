import LabInput from "../Elements/Input/LabInput";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";


const FormLogin = () => {
    // biar gk reload e = event
    const handleLogin = (e)=> {
        e.preventDefault();
        // tangkap value dengan nama input =email dan password
        localStorage.setItem("email",e.target.email.value);
        localStorage.setItem("pass",e.target.password.value);
    }
    return (
        <form onSubmit={handleLogin}>
            <LabInput 
                label="Email" 
                type="text" 
                placeholder="xx@mail.com"
                name="email"
            />

            <LabInput 
                label="Password" 
                type="password" 
                placeholder="***"
                name="password"
            />
            
            <Link to="/home" ><Button classname="bg-blue-600 w-full" tipe="submit" >Login</Button></Link>
        </form>

    )
}

export default FormLogin;