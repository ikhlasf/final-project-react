 // contoh storage

// const course = [
//     {
//         no: 1 ,
//         nama: "Les masak",
//         ket : "Masakan indonesia"
//     },

//     {
//         no: 1 ,
//         nama: "Les masak",
//         ket : "Masakan indonesia"
//     },
// ];

const Keyname ="ReactJSTen"
const setItem= (value) => {
    const valueToString = Json.stringify(value);
    localStorage.setItem( Keyname, valueToString)
}

const getItem = () => {
    const data = localStorage.getItem(Keyname)
    if(date) {
        return JSON.parse(data)
    }
    return null ;
}

const storage = {
    get: getItem,
    set: setItem
}

export default storage;
