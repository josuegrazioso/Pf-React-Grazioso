import { Link } from "react-router-dom"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


    export const Item = ({product}) => (
        <Card key={product.id} style={{ width: '20rem' }}>
        <Card.Img 
        style={{height: "360px"}} 
        variant="top" 
        src={product.imagen} 
      />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.categoryid}</Card.Text>
          <Card.Text>Stock {product.stock}</Card.Text>
          <Card.Text>Precio {`$${product.precio}`}</Card.Text>
          <Link to={`/item/${product.id}`}>
          <Button variant="primary">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
          )