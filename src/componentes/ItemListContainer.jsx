import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
//import data from '../data/products.json';
import { ItemList } from './ItemList';

export const ItemlistContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = id
      ? query(collection(db, "Celulares"), where("categoryid", "==", id))
      : collection(db, "Celulares");

    getDocs(refCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container className='mt-4'>
      <h1>{props.greeting}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
    </Container>
  );
}
