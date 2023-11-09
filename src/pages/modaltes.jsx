import Button from "../Components/Elements/Button/Button";
import {LayModal} from "../Components/Layouts/LayModal";
import { useState } from "react";




const PTes = () => {
    const [showModal, setShowModal]= useState(false)
    const handleOnClose =() => setShowModal(false)
    
    return (
        <div className="flex flex-col items-center ml-80 mr-80">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati nulla sit quam vitae! Optio maxime architecto iusto 
               accusamus totam eaque nulla cumque. Assumenda aspernatur ut fugit, quas autem 
               accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, 
               similique ex dolore illo maiores ducimus earum rerum suscipit nam dignissimos autem vel omnis esse tempora non molestias accusamus consectetur architecto?
            </p>
        <div className="mt-10">
            <Button onclick={()=> setShowModal(true)}>Modal</Button>
            
        </div>
        <LayModal onClose={handleOnClose} muncul={showModal} />
        </div>
    )
}

export default PTes;