/* import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ product }) => (
<Card key={product.id} style={{ width: '20rem' }}>
<Card.Img      
    style={{height: "380px"}}
    variant="top"
    src={product.image} 
/>
<Card.Body>
    <Card.Title>{product.nombre}</Card.Title>
    <Card.image>{product.imagen}</Card.image>
    <Card.Text>{product.categoryId}</Card.Text>
    <Card.Text>{product.stock}</Card.Text>
    <Card.Text>{`$${product.precio}`}</Card.Text>
    <Link to={`/item/${product.id}`} >
    <Button variant="primary">Comprar</Button></Link>
</Card.Body>
</Card>
); */


import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ product }) => (
  <Card key={product.id} style={{ width: '20rem' }}>
    <Card.Img      
      style={{ height: "380px" }}
      variant="top"
      src={product.imagen}  // Utiliza el nombre de propiedad correcto para la URL de la imagen
    />
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>{product.categoriaId}</Card.Text>
      <Card.Text>{product.stock}</Card.Text>
      <Card.Text>{`$${product.precio}`}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">Comprar</Button>
      </Link>
    </Card.Body>
  </Card>
);
