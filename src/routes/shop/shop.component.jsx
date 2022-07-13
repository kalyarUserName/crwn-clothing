import { ProductContext } from "../../contexts/products.context";
import { useContext } from "react";
import ProductCard from "../../components/productCard/productCard.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
