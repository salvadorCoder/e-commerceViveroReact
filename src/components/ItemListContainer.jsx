import React from 'react'
import ItemCounter from './ItemCounter'
import ItemList from './ItemList'
import  {obtenerProductos} from '../mocks/fakeApi'


const ItemListContainer = ({greeting, titulo2}) => {

  return (
    <div>
        <h1 className='text-center'>{greeting}</h1>
        
        <ItemCounter titulo2={titulo2} valorInicial={1} stock={5}/>

        
        <ItemList/>
        
    </div>
  )
}

export default ItemListContainer