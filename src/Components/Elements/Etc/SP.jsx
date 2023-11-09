const P = (props) => {
    const { children, classname ="text-md text-slate-900 "} = props;
    return (
        <p className={`${classname}`} >
            {children}
        </p>
    )
}

export default P;