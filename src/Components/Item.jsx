import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
      <div className="producto">
        <img src={producto.img} alt={producto.name}/>
        <div>
          <h2>{producto.name}</h2>
          <p>Precio: ${producto.price}</p>
          <p>Categoria: {producto.category}</p>
          <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
      </div>
  );
};

export default Item;
