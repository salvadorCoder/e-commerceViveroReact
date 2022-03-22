import React from 'react'
import ItemCounter from './ItemCounter'

const ItemListContainer = ({greeting, titulo2}) => {

  return (
    <div>
        <h1>{greeting}</h1>
        
        <ItemCounter titulo2={titulo2} valorInicial={1} stock={5}/>
    </div>
  )
}

export default ItemListContainer