import { Item } from "./Item"

export const ItemLits = ({products}) => products.map((product) => <Item key={product.id} product={product}/>);