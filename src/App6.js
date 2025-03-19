import React from 'react'
import { useState } from 'react';
import "./App6.css";

export default function App6() {
  const [hobby, setHobby] = useState([]);
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" placeholder="enter ur hobby" 
      onChange={(e) => setText(e.target.value)} />
      
      <button onClick={() => setHobby([...hobby, text])}>Add</button>
      <hr></hr>
      {hobby.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  )
}
