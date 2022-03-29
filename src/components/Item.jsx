import React, {useState} from 'react'
import ItemCounter from './ItemCounter'
import {Link} from 'react-router-dom'


const Item = ({producto}) => {
    const{name, img, description, masInfo, id}= producto

    const[show, setShow]=useState(false)

    const verMas = () =>{
        console.log(show)
        setShow(!show)
    }

    const onAdd = () =>{
        console.log ('agregué al carrito')
    }

return (
    
    <div className='card h-100 ' style={{width: '18rem' }}>
        <img src={img} className='card-img-top' alt='...' style={{width: '8rem' }}/>
        <div className='card-body'>
            <p className='card-text'>{name}</p>
            <p>{description}</p>
            
            <Link to={`/detalle/${id}`}> <button onClick={verMas}>{show ? 'Ver menos' : 'Ver más'}</button> </Link>

            <ItemCounter stock={8} initial={1} onAdd={onAdd}/>
        </div>
            </div>
)
}

export default Item