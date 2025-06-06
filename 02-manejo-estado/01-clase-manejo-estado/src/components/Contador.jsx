
import { useState } from "react"

export const Contador = () => {
    
    const [contador, setContador] = useState(0);

  return (
    <>
        <div>{contador}</div>
        <button onClick={ () => setContador(contador+1) } >Incremento</button>
        <button onClick={ () => {
                if (contador > 0) setContador(contador - 1);
            }}>Decremento</button>
        <button onClick={() => setContador(0)}>Reset</button>
    </>
  )
}


