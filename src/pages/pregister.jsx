import LayAuth from "../Components/Layouts/LayAuth";
import FormRegister from '../Components/Fragments/FormRegister';

const PRegister = () => {
    return (
        <div>
        <LayAuth title="Register" tipe="register">
        <FormRegister />
        </LayAuth>
        </div>
    )
}

export default PRegister;