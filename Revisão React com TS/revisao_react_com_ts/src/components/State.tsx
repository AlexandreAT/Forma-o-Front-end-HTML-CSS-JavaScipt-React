import React from 'react'

import { useState, ChangeEvent } from 'react'

const State = () => {

    const [text, setText] = useState<string | null>("Testando o hook");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

  return (
    <div>
        State
        <p>O texto é: {text}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State