import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)

    const onAdd = count => addItem(product, count)   /* alert(count) */  

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <h1>{product.nombre}</h1>
            <img src={product.imagen} />
            <div>Stock: {product.stock}</div>
            <div>precio: {product.precio}</div>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div> 
    )
}


/* export const ItemDetail = ({ product }) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
        </div>
        <div>{product.stock}</div>
    </div>
); */