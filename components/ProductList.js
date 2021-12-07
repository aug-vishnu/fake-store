import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const fetchProductsFs = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    setProducts(resp.data);
  };
  const loadMore = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    setProducts([...resp.data, ...products]);
  };
  useEffect(() => {
    fetchProductsFs();
  }, []);
  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <ProductCard product={product} />
          </div>
        );
      })}
      <div>
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};
