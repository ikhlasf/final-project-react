import CardHome from "../Components/Fragments/CardHome";
import LayNavbar from "../Components/Layouts/LayNavbar";
import { useState } from "react";
import Button from "../Components/Elements/Button/Button";
import { LayDetailModal } from "../Components/Layouts/LayDetailModal";
import { datalist, materilist } from "../Data/Datalist";
import Td from "../Components/Elements/Etc/STd";
import Th from "../Components/Elements/Etc/STh";
import { Link  } from "react-router-dom";

const email = localStorage.getItem('email');

const PHome = () => {
    const [showModal, setShowModal]= useState(false)
    const handleOnClose =() => setShowModal(false)
    const [nomor, setNomor]= useState(0) 

    const printnomor = () => {
        return(
            console.log(nomor)
        )
    }
    

    const handleAddCart = (e)=> {
        localStorage.setItem("cart", nomor)
    }


    return (
        <>
        <div 
        className=" bg-blue-200">
            <LayNavbar>{email}</LayNavbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pr-20 pl-20 py-20 justify-center">
                {datalist
                .map ( (data) => 
                    <CardHome key={data.id}>
                        <CardHome.Gambar  src={data.src}  alt={data.alt}/>
                        <CardHome.Isi Judul={data.judul} Deskripsi={data.deskripsi} Harga={data.harga} />
                        <Button  onclick={ ()=> {setShowModal(true) ; setNomor(data.id) }}   classname="bg-blue-800 text-slate-300 h-20">Detail</Button>
                    </CardHome>
                )}
            </div>
        </div>


        <div className="ustify-center absolute overflow-scroll">
                {datalist
                .filter ( (data) => data.id === nomor )
                .map ( (data) => 
                    <LayDetailModal onClose={handleOnClose} muncul={showModal} key={data.id} >
                        <LayDetailModal.Header Judul={data.judul} Detail={data.detail} />

                        <table>
                                <tr>
                                    <Th>No</Th>
                                    <Th>Materi</Th>
                                    <Th>Mentor</Th>
                                    <Th>Durasi</Th>
                                </tr>
                                {materilist
                                .filter ( (lop) => lop.id === nomor )
                                .map ( (lop) => 
                                    <tr key={lop.id}>
                                        <Td>{lop.no}</Td>
                                        <Td>{lop.materi}</Td>
                                        <Td>{lop.mentor}</Td>
                                        <Td>{lop.durasi}</Td>
                                    </tr>
                                )}
                            </table>
                        

                        <div className="flex justify-end mt-5">
                        
                        <Link to="/cart"><Button onclick={handleAddCart} > Add To Chart </Button></Link>
                        </div>
                    </LayDetailModal>
                )}

                

        </div>   
        </>
    )
}

export default PHome;