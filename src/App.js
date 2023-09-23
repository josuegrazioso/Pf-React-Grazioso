import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Cart from "./componentes/Cart";
import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { NavBar } from "./componentes/NavBar";
import { CartProvider } from "./contexts/CartContext";

function App() {
  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      const db = getFirestore();
      const docIds = ["4C1dwLpIlFMDusOcgyTM", "BP5jmEWX77LXVSnwLOWM", "VjHSQBhFdLC2zALNiw3P", "bKpNUN8vb05CCsaT8UXP"];

      try {
        for (const docId of docIds) {
          const refDoc = doc(db, "Celulares", docId);
          const snapshot = await getDoc(refDoc);

          if (snapshot.exists()) {
            console.log(`Documento ${docId}:`, { id: snapshot.id, ...snapshot.data() });
          } else {
            console.log(`El documento ${docId} no existe.`);
          }
        }
      } catch (error) {
        console.error("Error al obtener los documentos:", error);
      }
    };

    fetchDataFromFirestore();
  }, []);



      /* try {
        const snapshot = await getDoc(refDoc);
        if (snapshot.exists()) {
          console.log({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("El documento no existe.");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    };

    fetchDataFromFirestore();
  }, []);
 */
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hi!" />} />
          {/* Corregir la ruta para Cart */}
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Hi!" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
