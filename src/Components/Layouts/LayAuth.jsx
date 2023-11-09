import { Link } from "react-router-dom";

const LayAuth = (props) => {
    const { children, title, tipe } = props;
    return (
        
        <div  className='flex justify-center bg-slate-300 min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-blue-900'>
                    {title}
                </h1>
                <p className='font-medium text-slate-500 py-2'></p>
                    {children}
                <p className="text-sm mt-5 text-center">
                    {tipe ==="login"
                        ? "Tidak Memiliki Akun? "
                        : "Sudh Memiliki Akun? "}
                        
                    {tipe ==="login" 
                        ? <Link className="font-bold text-blue-900" to="/register"> Register</Link>
                        : <Link className="font-bold text-blue-900" to="/login"> Login</Link>}
                </p>
            </div>
        </div>
    )
}

export default LayAuth;