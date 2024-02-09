import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Carrito </h1>

      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <h3>{prod.name}</h3>
            <p>Precio unit: ${prod.price}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
          </div>
        ))
      }
      { 
          carrito.length > 0 ?
          <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
          </> :
          <h2>El carrito esta vacio :( </h2>
      }

    </div>
  )
}

export default Carrito;