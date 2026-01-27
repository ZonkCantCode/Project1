import { useState } from 'react'

const App=() => {
  const [name, setName] = useState('');
  return (
    <>  
       <div>
        <h2>Name</h2>
        <input value={name}
         onChange={(event)=> setName(event.target.value)} 
         placeholder="Type here" />
       </div>
       <div>
        <h2>Your name is: {name}</h2>
       </div>
    </>
  )
}

export default App