import React from 'react'
import { useState } from 'react'

export const Btn = (props) => {
    const {children, input} = props;

    const [angkap, setAngkap] = useState(0)
    const [hasil, setHasil] = useState(0)
    const hdTambah =()=>{
        setAngkap (input);
        setHasil ( hasil + angkap );
    console.log(`Hasil dari ${children} ${hasil}`);
    }
    
  return (
    <div >
        <div className='tex-2xl p-5'>{input}</div>
        <div><button className='bg-black text-white h-20 w-20' onClick={hdTambah}>+</button></div>
        <div>Hasil {children} adalah : {hasil}</div>
    </div>
  )
}
