import React, { useState } from 'react';

const InputField = () => {
  
    const[name, setName] = useState('');

    return (
    <input placeholder="Type here"
            value={name}
              />
    )
  }