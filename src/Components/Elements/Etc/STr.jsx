const Tr = (props) => {
    const { children, classname ="border border-slate-700"} = props;
    return (
            <tr class={`border-separate ${classname} `}>{children}</tr>
    )
}

export default Tr;