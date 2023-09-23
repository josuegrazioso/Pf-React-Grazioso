import { Link } from "react-router-dom";
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
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>{product.description}</Card.Text>
    <Link to={`/item/${product.id}`} >
    <Button variant="primary">Comprar</Button></Link>
</Card.Body>
</Card>
);