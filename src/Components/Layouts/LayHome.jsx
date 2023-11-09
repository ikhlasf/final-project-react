const LayHome = () => {
    return (
        <div className="bg-slate-300 flex flex-row justify-center">
        {datalist.map ( (data) => 
            <CardHome key={data.id}>
                <CardHome.Gambar src={data.src}  alt={data.alt}/>
                <CardHome.Isi Judul={data.judul} Deskripsi={data.deskripsi} />
            </CardHome>
        )}

        </div>
    )
}

export default LayHome;