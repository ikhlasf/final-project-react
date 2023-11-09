import H4 from "../Elements/Etc/SH4";
import P from "../Elements/Etc/SP";

const CardHome = (props) => {
    const { children } = props;
    return(
            <div className="w-70% mt-5 bg-gradient-to-t from-orange-100 to bg-blue-900
            rounded-xl shadow mx-5 mb-5 flex flex-col ">
                {children}
            </div>

    )
}


// nested componen

const Gambar = (props) => {
    const { src, alt} = props;
    return (
            <img className="h-full object-cover rounded-xl p-2" src={src} alt={alt} />

    )
}

const Isi = (props) => {
    const { Judul, Deskripsi, Harga } = props;
    return (
        <div className="px-5 py-2 pb-5 pr-2 pl-2">
            <div>
            <H4>{Judul}</H4>
            <P>{Deskripsi}</P>
            </div>
            <div className="flex justify-end content-end">
                <h2 className=" font-bold italic text-green-700 text-lg">Rp. {Harga.toLocaleString('id-ID')}</h2>
            </div>
        </div>
    )
}



 CardHome.Gambar= Gambar;
 CardHome.Isi= Isi;


export default CardHome;


