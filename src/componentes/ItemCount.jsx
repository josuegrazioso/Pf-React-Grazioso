import { useState } from 'react';

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
        if(count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const handleIncreaseCount = () => {
        if(stock > count) {
            setCount(prev => prev + 1);
        }
    };

    /* const onAdd = () => {
       alert(count)
    }; */
 
    return(
        <div className="itemcount">
            <button><span onClick={handleDecreaseCount}>-</span></button>
            <span>{count}</span>
            <button><span onClick={handleIncreaseCount}>+</span></button>
            <button className="buttonn" onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
};