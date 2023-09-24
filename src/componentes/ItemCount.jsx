import { useState } from "react"; 

export const ItemCount = ({onAdd,stock}) => {
    const [count,setCount] = useState(1);

    const handleDecreaseCount = () => {
        if(count > 1){
            setCount((prev) => prev  -1);
        }
    };

    const handleIncreaseCount = () => {
        if(stock > count){
            setCount((prev) => prev  +1);
        }
    };

    return (
        <div className="itemCount">
            <button class="boton"><span onClick={handleDecreaseCount}>-</span></button>
            <span>{count}</span>
            <button class="boton"><span onClick={handleIncreaseCount}>+</span></button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};