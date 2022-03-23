import React from 'react'
import ItemCounter from './ItemCounter'
import ItemList from './ItemList'

const ItemListContainer = ({greeting, titulo2}) => {

  return (
    <div>
        <h1>{greeting}</h1>
        
        <ItemCounter titulo2={titulo2} valorInicial={1} stock={5}/>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer