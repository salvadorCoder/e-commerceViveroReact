import React, { useEffect, useState } from 'react'
import {obtenerProductos} from '../mocks/fakeApi'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({})
    const [cargando, setCargando] = useState(false)

/*     const {id} = useParams()
    console.log(id) */

    useEffect(()=> {
      setCargando(true)

        obtenerProductos
        .then((res) => setDetalleProducto(res.find ((item) => item.id === '05')))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, [])


  return (

    <div>
        {cargando ? <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div> 
                    </div> : <ItemDetail detalleProducto={detalleProducto}/>}
      <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer