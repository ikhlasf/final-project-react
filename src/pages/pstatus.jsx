import LayNavbar from "../Components/Layouts/LayNavbar";
import { datalist } from "../Data/Datalist";
import Button from "../Components/Elements/Button/Button";
import H4 from "../Components/Elements/Etc/SH4";
import P from "../Components/Elements/Etc/SP";
import PNBayar from "./pnbayar";
    
    const email = localStorage.getItem('email');
    
       

    const PStatus = () => {
        if ((localStorage.getItem('bayar'))== "1")
        return (
            <>
               
                <div 
                className=" bg-blue-200">
                    <LayNavbar>{email}</LayNavbar>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-1 pr-20 pl-20 py-20 justify-center items-center">
                        {datalist
                            .filter ( (data) => data.id === parseInt(localStorage.getItem('cart')) )
                            .map ( (data) => 
                            <div key={data.id} className="py-40 justify-center items-center content-center">
                                <H4>{data.judul}</H4>
                                <img className="h-40 object-cover rounded-md w-50 mb-5 mt-5" src={data.src} />
                                <H4>Selamat data pembayaran anda telah terverifikasi sebesar Rp. {data.harga.toLocaleString('id-ID')} ,<br/> <br/>
                                Anda Berhak Mengikuti Kelas {data.judul}<br/>
                                harap cek email anda untuk mengetahui link zoom meeting yang akan diadakan pada jadwal yang telah ditentukan, <br/>
                                Kami tunggu kehadirannya, sampai bertemu di kelas materi </H4>
                            </div>
                                
                        )}
                    <div className="pr-20 pl-20 py-40 justify-center items-center">
                        <H4 classname=" text-xl font-bold text-slate-700 pb-5 mt-5">Jika mengalami kesulitan anda dapat menghubumi CS kami :</H4>
                        <ul className="pb-5">
                            <li><H4 classname="font-bold text-lg text-blue-600">Subarkah Wahyudi (Admin 1) : <a href="#" className=" text-orange-800">Link</a></H4></li>
                            <li><H4 classname="font-bold text-lg text-blue-600">Siti Aminah (Admin 2) : <a href="#" className=" text-orange-800">Link</a></H4></li>
                            <li><H4 classname="font-bold text-lg text-blue-600">Zuhri Almanah (Admin 3) : <a href="#" className=" text-orange-800">Link</a></H4></li>
                        </ul>
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
        return (
            <><PNBayar /></>
        )
    }
    
    export default PStatus;
