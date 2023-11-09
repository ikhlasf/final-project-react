import Button from "../Elements/Button/Button";
import H4 from "../Elements/Etc/SH4";
import P from "../Elements/Etc/SP";
import Th from "../Elements/Etc/STh";
import Td from "../Elements/Etc/STd";

export const LayDetailModal = ({muncul, onClose, children}) => {
    const handleOnClose =(e)=> {
        if (e.target.id === 'modal') onClose()
    }
    if (!muncul) return null;
  return (
    <div id="modal" onClick={handleOnClose} className='fixed inset-0 flex backdrop-blur-sm justify-center items-center px-48 py-48
    '>
       <div className="bg-slate-200 p-2 rounded max-w-screen-xl max-h-screen-md flex flex-wrap  items-center flex-col ">
        {children}
        </div> 
    </div>
  )
}

const Header = (props) => {
  const { Judul, Detail, children} = props;
  return(
    <div className="px-20 py-20  h-18  ">
    <div className="mb-2 mt-5"><H4>{Judul}</H4></div>
    <div className="mb-2"><P>{Detail}</P></div>
    {children}
  </div>
    
  )
}




const BtnChart = (props) => {
  return (
    <div className="flex justify-end">
    <Button>Add To Chart</Button>
    </div>)
}

LayDetailModal.Header= Header;
LayDetailModal.BtnChart= BtnChart;