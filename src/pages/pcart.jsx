import LayNavbar from "../Components/Layouts/LayNavbar";
import { datalist } from "../Data/Datalist";
import Button from "../Components/Elements/Button/Button";
import H4 from "../Components/Elements/Etc/SH4";
import P from "../Components/Elements/Etc/SP";
import { Link } from "react-router-dom";
    
    const email = localStorage.getItem('email');

    const handleBayar = (e)=> {
        localStorage.setItem("bayar", "1")
    }

    const PCart = () => {
        return (
            <>
                <div 
                className=" bg-blue-200">
                    <LayNavbar>{email}</LayNavbar>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 pr-20 pl-20 py-20 justify-center">
                        {datalist
                            .filter ( (data) => data.id === parseInt(localStorage.getItem('cart')) )
                            .map ( (data) => 
                            <div key={data.id} className="py-40">
                                <H4>{data.judul}</H4>
                                <img className="h-40 object-cover rounded-md w-50 mb-5 mt-5" src={data.src} />
                                <P>Terimakasih atas ketertarikan anda mengikuti kelas {data.judul} dengan harga</P> 
                                <H4 classname="text-blue-900 text-xl font-bold">Rp. {data.harga.toLocaleString('id-ID')}</H4>
                            </div>
                                
                        )}
                    <div className="pr-20 pl-20 py-40 justify-center items-center">
                        <H4 classname=" text-xl font-bold text-slate-700 pb-5 mt-5">Pembayaran dapat dilakukan melalui </H4>
                        <ul className="pb-5">
                            <li><H4 classname="font-bold text-lg text-blue-600">Bank BCA : 123456 an Taryono</H4></li>
                            <li><H4 classname="font-bold text-lg text-blue-600">Bank Mandiri : 543534343 an Sukirman</H4></li>
                            <li><H4 classname="font-bold text-lg text-blue-600">Bank BRI : 99827343 an Martono</H4></li>
                            <li><H4 classname="font-bold text-lg text-blue-600">Ovo : 089534857343 an Darmono</H4></li>
                        </ul>
                        <Link to="/status"><Button onclick={handleBayar}>Bayar</Button></Link>
                    </div>
                    <h4 className=" italic">Segala bentuk pembayaran yang dikirimkan tidak secara otomatis dapat diverifikasi, mohon berikan informasi pada admin melalui chat whatsapp
                        dengan menyertakan bukti transfer, setelah data diverifikasi oleh admin maka akan ada pemberitahuan melalui email,
                        berikut dengan link zoom meeting dan dokumentasi materi yang akan diberikan. harap mengecek secara berkala.<br/><br/><br/>
                        Termakasih
                    </h4>
               
                    </div>
                    </div>

                
            </>
        )
    }
    
    export default PCart;
