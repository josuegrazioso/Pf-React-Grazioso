import React, { useContext, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { clear, items, removeItem } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador +(valorActual.quantity * valorActual.precio),
      0
    );

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const order = {
      buyer: formData,
      items,
      total: total(),
    };

    try {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      const docRef = await addDoc(orderCollection, order);

      setFormData({
        name: "",
        phone: "",
        email: "",
      });

      clear();

      alert("Su orden: " + docRef.id + " ha sido completada!");
    } catch (error) {
      console.error("Error al enviar la orden:", error);
      alert("Hubo un error al enviar la orden. Por favor, inténtelo nuevamente.");
    }
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>${item.precio ? item.precio.toFixed(2) : 'N/A'}</td>
              <td>{item.quantity}</td>
              <td>${(item.quantity * item.precio).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${total().toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <div className="buyer-info">
        <h2>Datos de Comprador</h2>
        <Form onSubmit={handleSubmit} className="buyer-form">
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Enviar Orden
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Cart;

