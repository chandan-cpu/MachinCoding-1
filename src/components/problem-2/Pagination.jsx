import "./Pagination.css";
import { useEffect, useState } from "react";

export default function Pagination() {
  const PAGE_SIZE = 10;
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=194");
    const json = await data.json();
    setProduct(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProduct = product.length;
  const noOfPages = Math.ceil(totalProduct / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handelClick = (i) => {
    setPage(i);
  };
  const handelnext = () => {
    setPage((prev) => prev + 1);
  };
  const handelprev = () => {
    setPage((prev) => prev - 1);
  };

  console.log(product);
  return !product.length ? (
    <h1>Not Found</h1>
  ) : (
    <div className="App">
      <div className="numbering">
        <button onClick={handelprev} disabled={page === 0}>
          ◀️
        </button>
        {[
          ...Array(noOfPages)
            .keys()
            .map((i) => (
              <button
                onClick={() => handelClick(i)}
                className={"button " + (i === page ? "active" : "")}
              >
                {i}
              </button>
            )),
        ]}
        <button onClick={handelnext} disabled={page === noOfPages}>
          ▶️
        </button>
      </div>
      <div className="container">
        {product.slice(start, end).map((item) => (
          <div key={item.id} className="container-content">
            <img src={item.images} alt="" srcset="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
