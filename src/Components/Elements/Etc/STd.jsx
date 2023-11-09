const Td = (props) => {
    const { children, classname ="border border-slate-700"} = props;
    return (
        <td  className={`border-separate p-1 ${classname} `}>{children}</td>
    )
}

export default Td;