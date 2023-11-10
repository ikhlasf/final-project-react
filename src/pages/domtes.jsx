import Button from "../Components/Elements/Button/Button";
import { useState } from "react";
import { datalist, materilist } from "../Data/Datalist";




const PTes = () => {
    
    const [nomor, setNomor]= useState(0) 

    const printnomor = () => {
        return(
            console.log(nomor)
        )
    }

    const dataSatuan = (id) =>{
    const Selid = datalist
        .filter ( (data) => data.id === id )
        .map ( ( filterdata ) => {
            return filterdata ([])
        } )
    }

    return (
        <>
        <div className="flex flex-col items-center ml-80 mr-80">
            
            <ul>
                {datalist.map ( (lopdata) => 
                    <li key={lopdata.id}>
                        {}{lopdata.judul}
                    </li>
                            
                        )}
            </ul>

        <div className="mt-10">
            <Button onclick={()=> setNomor(nomor+1) }>Seting</Button>
        </div>
            
        <div>
            <h1>
                {datalist
                .filter ( (lop) => lop.id === 4 )
                .map ( (lop) => 
                    <p key={lop.id}>
                        {lop.judul} <br/> {lop.deskripsi  } <br/> 
                        {/* jalanin 2 function dalam satu click */}
                        <Button onclick={()=> {setNomor(lop.id) ; setNomor(nomor+1)}} >Get Nomor</Button>
                    </p>
                )}
            </h1>

            {/* ambil data array dari anak  */}
            <h1>
            {datalist 
                .filter ( (lop) => lop.id === 4 )
                .map ( (tes) => 
                    <p>
                        {tes.materi.map(materi => materi.durasi)} <br/> 
                    </p>
                )}
            </h1>



            <div className="flex flex-col">
                           

                                {materilist
                                .filter ( (lop) => lop.id ===4 )
                                .map ( (lop) => 
                                <ul>
                                    <li>{lop.durasi}</li>
                                    <li>{lop.mentor}</li>
                                </ul>
                                )}

                                
                        </div>
            


        </div>
                    
        


        <div className="mt-10">
            <Button onclick={printnomor}>Print</Button>
        </div>
        
        </div>
        </>
    )
}

export default PTes;