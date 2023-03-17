 import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Modal.css'

 
 const Modal = () => {

    let [modal , setModal] = useState(true);
    let [modal11 , setModal11] = useState(false);
    useEffect(()=>{
       setTimeout(()=>{setModal(false)} , 2000)
    } , [])

    useEffect(()=>{
        setTimeout(()=>{setModal11(true)} , 3000)
    } )
   return (
     <div> 
       {
          modal == true ? <h1 className='modal'>2초 후에 사라지는 모달 Modal</h1> : null 
         
       }    

       {
          modal11 == true ? <h1 className='modal'>3초 후에 생성되는 모달 Modal</h1> : null
       }
    </div>
   )
 }
 
 export default Modal