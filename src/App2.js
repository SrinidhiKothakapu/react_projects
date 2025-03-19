import {useState} from 'react'
export default function App2() {
  const [count,setCount]=useState(0);
  count=0
  const increment=()=>{
    setCount(count++);
  }
  const decrement=()=>{
    setCount(count--);
  }
  return (
    <div>
       <button onclick={decrement}>-</button>
       {count}
       <button onclick={increment}>+</button>
    </div>
  )
}
