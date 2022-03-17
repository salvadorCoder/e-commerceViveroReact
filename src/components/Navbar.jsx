import CartWidget from "./CartWidget"

const Navbar = () =>{
    return(
        <nav className='navbar'>
            
                <img src='https://agrogojarviveros.com/entradavivero/uploads/2017/07/herbal-spa-treatment-leaves.png' alt='logo' className='logo'/>
            <a className='linksnav' href="#">Inicio</a>
            <a className='linksnav' href="#">Nosotros</a>
            <a className='linksnav' href="#">Productos</a>
            <a className='linksnav' href="#">Contactanos</a>
            <CartWidget/>
        </nav>
        )
}


export default Navbar