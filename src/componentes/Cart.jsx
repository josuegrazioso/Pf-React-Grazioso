import { Container, Table } from "react-bootstrap";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Form from "react-bootstrap/Form";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Cart = () => {
  const [formValues, setFormValues] = useState("");
  const { items, removeItem, clear } = useContext(CartContext);
  console.log(items)


  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio,
      0
    );


  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = () => {
    const order = {
      name: formValues,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        });
        clear();
        alert("Su orden: " + id + " ha sido completada");
      }
    });
  };
  return (
    <Container>
      <h1>Carrito</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre} </td>
              <td>{item.precio} </td>
              <td>{item.quantity} </td>
              <td>
                <button class="botones-borrar" onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button class="botones-borrar" onClick={() => clear()}>Borrar todo</button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total()} </td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <h2>Ingrese datos de usuario</h2>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.name}
            type="text"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.email}
            type="email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tel</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.phone}
            type="text"
            name="phone"
            required
          />
        </Form.Group>
      </Form>
      <button class="botones" onClick={sendOrder}>Comprar</button>
    </Container>
  );
};



