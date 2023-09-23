/* import { createContext, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const addItem = (product, quantity) => {
        const alreadyExists = items.some(item => item.id === product.id)

        if (!alreadyExists) setItems(Prev => [...prev, { ...product, quantity }])
        else {
            const actualizarProductos = items.map(item => {
                if (item.id === product.id)
                return {
                    ... item,
                    quantity: item.quantity + quantity,
                }
                else return item
            })
            setItems(actualizarProductos)
        }
    }

    const totalWideget = items.reduce((acc. val) => acc + val.quantity, 0)

    const removeItem = id => {
        const itemFiltered = items.filter(item => item.id != id)
        setItems(itemFiltered)
    }

    const clear = () => setItems([])

    return (
        <CartContext.Provider
            value={{ addItem, items, removeItem, clear, totalWideget }}
        >
            {children}
       </CartContext.Provider>
    )
} */

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    const alreadyExists = items.some(item => item.id === product.id);

    if (!alreadyExists) {
      setItems(prev => [...prev, { ...product, quantity }]);
    } else {
      const updatedProducts = items.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setItems(updatedProducts);
    }
  };

  const totalWidget = items.reduce((act, val) => act + val.quantity, 0);

  const removeItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const clear = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ addItem, items, removeItem, clear, totalWidget }}
    >
      {children}
    </CartContext.Provider>
  );
};
