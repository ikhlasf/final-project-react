const Button = (props) => {
    const { children, classname ="bg-slate-800", onclick= ()=>{}, tipe ="button"} = props;
    return (
        <button
            className={`h-10 px-6 font-semibold rounded-md ${classname} text-slate-300`}
            type={tipe}
            onClick={onclick}
        >
            {children}
        </button>
    )
}

export default Button;