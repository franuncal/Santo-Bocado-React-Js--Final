import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [name, setName] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {
    pedirDatos().then((res) => {
      if (category) {
        setProductos(res.filter((prod) => prod.category === category));
        setName(category);
      } else {
        setProductos(res);
        setName("Productos");
      }
    });
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} name={name}/>
    </div>
  );
};

export default ItemListContainer;
