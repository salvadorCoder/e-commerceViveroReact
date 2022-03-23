import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({card}) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const productos = [
        {id:'01', name: 'planta01', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        {id:'02', name: 'planta02', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        {id:'03', name: 'planta03', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {id:'04', name: 'planta04', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        {id:'05', name: 'planta05', description: 'sarasa para vender', img: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
    ]

    const obtenerProductos = new Promise ((resolve, reject) =>{
        let condition = true 
        if(condition){
            setTimeout(()=>{
                resolve(productos)
            }, 2000);        
        }else {
            reject ('salio mal =(')
        }
    })

    //console.log(obtenerProductos)

    useEffect(()=> {
        obtenerProductos
        .then((res) => setListaProductos(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[])

    console.log(listaProductos)





    return (
        <div>Lista de productos

    {cargando ? <p>Cargando...</p> :  listaProductos.map ((producto) => <Item producto={producto} key={producto.id}/>)}

    </div>
    )

}

export default ItemList