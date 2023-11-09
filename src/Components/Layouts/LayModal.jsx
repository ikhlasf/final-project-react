
export const LayModal = ({muncul, onClose}) => {
    const handleOnClose =(e)=> {
        if (e.target.id === 'modal') onClose()
    }
    if (!muncul) return null;

  return (
    <div id="modal" onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-40
    backdrop-blur-sm flex justify-center items-center pl-20 pr-20'>
       <div className="bg-slate-200 p-2 rounded max-w-screen-xl flex flex-wrap  items-center flex-col ">
        <div className="pl-20 pr-20 ">
            <h2>Ini adalah Judul</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nisi tenetur fuga praesentium vero, vitae blanditiis nam omnis, corporis magnam ex itaque iste quod repudiandae expedita commodi recusandae sed facilis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis ipsum alias illo laborum, quam iusto perspiciatis quasi. Quod sint eveniet excepturi sunt voluptas quis exercitationem laboriosam pariatur voluptatem asperiores!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores! Neque ratione numquam quia tenetur unde. Incidunt esse, doloribus numquam distinctio dolor officiis aut doloremque, blanditiis necessitatibus voluptas fugiat ratione!
            </p>
        </div>
            <div className="flex flex-col">

            <table className="mb-5 mt-5">
              <tr>
                <Th>No</Th>
                <Th>Materi</Th>
                <Th>Pengajar</Th>
                <Th>Durasi</Th>
              </tr>
              <tr>
                <Td>1</Td>
                <Td>Perkenalan</Td>
                <Td>Abdul</Td>
                <Td>2 Jam via Zoom</Td>
              </tr>
            </table>
            </div>
            <div className="flex justify-end">
            <Button>Add To Chart</Button>
            </div>
        </div> 
    </div>
  )
}
