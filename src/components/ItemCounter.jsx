import React, { useState } from 'react'

const ItemCounter = ({titulo2, valorInicial, stock}) => {
  const [contador, setContador] = useState(valorInicial)
    
    const sumar = () => {
      if(contador < stock){
      setContador(contador + 1)
    } 
  }

    const restar = () =>{
      if(contador > 0){
      setContador(contador - 1)
    }
    }

    const mostrar = () =>{
      console.log(contador)
    }

  return (
      <div>
        <p>{titulo2}</p>
        <button onClick={restar}>-</button>
        <span>{contador}</span>
        <button onClick={sumar}>+</button>
        <button onClick={mostrar}>Agregar</button>
    </div>
  )
}

export default ItemCounter