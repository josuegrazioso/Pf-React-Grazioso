import { useContext } from "react";
import { Link } from "react-router-dom";

import cart from "../assets/cart.png";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const {totalWidget} = useContext(CartContext)

return (
  <Link to="/cart">
    <img id="carrito" src={cart} alt="Cart" /> <span>{totalWidget}</span>
  </Link>)
};
