const Th = (props) => {
    const { children, classname ="border border-slate-700"} = props;
    return (
            <th className={`border-separate p-1 ${classname} `}>{children}</th>
    )
}

export default Th;