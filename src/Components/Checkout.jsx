import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';


const Checkout = () => {

  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    }
    
    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id)
        vaciarCarrito();
      })

  } 

  if(pedidoId){
    return (
      <div className="container">
        <h1 className='main-title'>Muchas gracias por tu compra!</h1>
        <p>Tu numero de pedido es: {pedidoId}</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Finalizar compra</h1>
      <form className='formulario' onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder='Nombre' {...register("nombre")} />
        <input type="email" placeholder='e-mail' {...register("email")} />
        <input type="phone" placeholder='Telefono' {...register("telefono")} />

        <button className='comprar' type='submit'>Comprar</button>

      </form>

    </div>
  )
}

export default Checkout;