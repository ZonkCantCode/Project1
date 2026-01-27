import { useState } from 'react'

const Inputfield =() => {
 
  const [name, setName] = useState('');
  const age= 20;

    return(
        <>
               <div>
        <h2>Name</h2>
        <input value={name}
         onChange={(event)=> setName(event.target.value)} 
         placeholder="Type here" />
         
       </div>
       <div>
        <h2>{name} {age} </h2>

       </div>
        </>
    )
}


export default Inputfield;