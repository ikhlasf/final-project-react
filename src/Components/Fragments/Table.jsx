import Th from "../Elements/Etc/STh";
import Td from "../Elements/Etc/STd";
import Tr from "../Elements/Etc/STr";


const Table = () => {
    return (
        <table class="border-separate border border-slate-700 ...">
            <Tr>
                <Th>Head1head head</Th>
                <Th>Head2border </Th>
            </Tr>
            <Tr>
                <Td>D1</Td>
                <Td>D2</Td>
            </Tr>
        </table>

    )
}

export default Table;