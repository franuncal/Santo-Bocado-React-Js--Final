import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import { useState } from "react";
import Carrito from "./Components/Carrito";
import { CartContext } from "./Context/CartContext";

function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad}

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito =  nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
    
    if(estaEnElCarrito){
      estaEnElCarrito.cantidad += cantidad;  
    } else {
      nuevoCarrito.push(itemAgregado);

    }
    setCarrito(nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  return (
    <>
      <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito}}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/categorias" element={<ItemListContainer />}/>
            <Route path="/carrito" element={<Carrito />} /> 
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
