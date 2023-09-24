import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getDoc, getFirestore, doc } from "firebase/firestore";

//import data from '../data/products.json';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = (props) => {
    const [product, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore()

        const refDoc = doc(db, "Celulares", id)

        getDoc(refDoc).then(snapshot => {
          setProducts({id: snapshot.id, ...snapshot.data()})
        }).finally(() => setLoading(false))
      }, []);



if (loading) return <div>Loading...</div>
if (!product) return <div>Producto no encontrado</div>

    return (
        <Container className='mt-4'>
            <h1>DETALLE</h1>
            <ItemDetail product={product}/>
        </Container>
    );
}


