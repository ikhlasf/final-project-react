import React from 'react'

export const Modal = ({muncul, onClose}) => {
    const handleOnClose =()=> {
        onClose()
    }
    if (!muncul) return null;

  return (
    <div onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30
    backdrop-blur-sm flex justify-center items-center'>
       <div className="bg-white p-2 rounded">
            Modal
        </div> 
    </div>
  )
}
