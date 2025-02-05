import Basket from "./Basket"
import Cards from "./Cards"
import { useState } from "react"
function App() {

  const [count,setCount]=useState(0)

  return (
    <>
    <Basket count={count}/>
    <Cards setCount={setCount} count={count}/>   
    </>
 
  )
}

export default App
