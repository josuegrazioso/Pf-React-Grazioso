import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
/* import data from '../data/products.json'; */
import { ItemDetail } from "../componentes/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";


export const ItemDetailContainer = props => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore()

        const refDoc = doc(db, "Celulares", id)

        getDoc(refDoc)
            .then(snapshot => {
                setProduct({ id: snapshot.id, ...snapshot.data() })
            })
            .finally(() => setLoading(false))
    },  [])

    if (loading) return <div>Loading...</div>

    return(
        <Container classname="mt-4">
            <h1>DETALLE:</h1>
            <ItemDetail product={product}/>
        </Container>
    );
};

