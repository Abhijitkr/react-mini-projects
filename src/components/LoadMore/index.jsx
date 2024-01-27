import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [dataExhaust, setDataExhaust] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevProduct) => [...prevProduct, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDataExhaust(true);
  }, [products]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Something went wrong: {error}</div>;

  return (
    <div className="load-more-container">
      <h1 className="text-center text-3xl font-bold m-5">Load More Project</h1>
      <div className="product-container">
        {!error && products && products.length
          ? products.map((product, index) => (
              <div key={index} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="loadmore">
        <button
          disabled={dataExhaust}
          onClick={() => setCount(count + 1)}
          className="bg-purple-500"
        >
          Load More
        </button>
        {dataExhaust ? <p>You reached 100 products!</p> : null}
      </div>
    </div>
  );
}
