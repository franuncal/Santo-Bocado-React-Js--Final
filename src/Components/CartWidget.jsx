import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        🛒
        <span className='cantidad-carrito'> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget