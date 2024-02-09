import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../Firebase/config"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [name, setName] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {
    
    const productosRef = collection(db, "Products");

    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    getDocs(q)
      .then((resp) => {
        
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id}
          })
        )
      })
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} name={name}/>
    </div>
  );
};

export default ItemListContainer;
