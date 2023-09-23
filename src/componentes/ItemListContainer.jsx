/* import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

import { ItemLits } from "../componentes/ItemList";

export const ItemListContainer = props => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams ();

    useEffect(() => {
        const db = getFirestore()

        const refCollection = id
            ? query(collection(db, "Celulares"), where("categoryId", "===", id))
            : collection(db, "Celulares")

        getDocs(refCollection).then(snapshot => {
                if (snapshot.size === 0) console.log("no results")
                else
                    if (id) {
                        setProducts.docs.map(doc => {
                            return {id: doc.id, ...doc.data() }
                        })
                    } else {
                        setProducts(
                            snapshot.docs.map(doc => {
                                return { id: doc.id, ...doc.data() }
                            })
                        )
                    }
    }, [])

    if (loading) return <div>Loading...</div>

    return(
        <Container classname="mt-4">
            <h1>{props.greeting}</h1>
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                <ItemLits products={products} />
            </div>
        </Container>
    )
}
 */

import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { ItemLits as ItemList } from "../componentes/ItemList";


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const fetchData = async () => {
      try {
        let refCollection;
        if (id) {
          refCollection = query(
            collection(db, "Celulares"),
            where("categoryId", "==", id)
          );
        } else {
          refCollection = collection(db, "Celulares");
        }

        const snapshot = await getDocs(refCollection);

        if (snapshot.size === 0) {
          console.log("No hay resultados.");
        } else {
          const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(productList);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
    </Container>
  );
};
