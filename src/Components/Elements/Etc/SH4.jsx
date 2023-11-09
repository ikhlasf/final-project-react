const H4 = (props) => {
    const { children, classname ="text-2xl font-bold text-slate-700"} = props;
    return (
        <h4 className={`${classname}`} >
            {children}
        </h4>
    )
}

export default H4;