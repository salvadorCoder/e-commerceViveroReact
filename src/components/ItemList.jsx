import React, { useEffect, useState } from 'react'
import Item from './Item'
import  {obtenerProductos} from '../mocks/fakeApi'


const ItemList = ({card}) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(true)



    //console.log(obtenerProductos)

    useEffect(()=> {
        obtenerProductos
        .then((res) => setListaProductos(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[])

    console.log(listaProductos)





    return (

        <div className="d-flex justify-content-center">

    {cargando ? <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div> :  listaProductos.map ((producto) => <Item producto={producto} key={producto.id}/>)}


    </div>
    )

}

export default ItemList