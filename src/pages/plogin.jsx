import LayAuth from "../Components/Layouts/LayAuth";
import FormLogin from '../Components/Fragments/FormLogin';

const PLogin = () => {
    return (
        
        <div>
        <LayAuth title="Login" tipe="login">
        <FormLogin />
        </LayAuth>
        </div>
    )
}

export default PLogin;