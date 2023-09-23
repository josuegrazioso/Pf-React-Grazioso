import { useContext } from "react";
import { Link } from "react-router-dom";

import cart from "../assets/cart.png";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)

    const imageStyles = {
        width: "32px",
        height: "32px",
        marginRight: "8px",
    };

    return (
        <Link to="/cart">
            <img style={imageStyles} src={cart} alt="Cart" /> <span>{totalWidget}</span>
        </Link>
    )
}
