import LabInput from "../Elements/Input/LabInput";
import Button from "../Elements/Button/Button";


const FormRegister = () => {
    return (
        <form action=''>
            <LabInput 
                label="Nama Lengkap" 
                type="text" 
                placeholder="..."
                name="namaLengkap"
            />

            <LabInput 
                label="Email" 
                type="email" 
                placeholder="xx@mail.com"
                name="email"
            />

            <LabInput 
                label="Password" 
                type="password" 
                placeholder="***"
                name="password"
            />

            <LabInput 
                label="Confirm Password" 
                type="password" 
                placeholder="***"
                name="confirmPassword"
            />
            
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>

    )
}

export default FormRegister;