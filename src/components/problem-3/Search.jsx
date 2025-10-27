import { useEffect, useState } from "react";
import "./Search.css";
const Search = () => {
  //It Store the Input Text That type into the input box
  const [input, setInput] = useState("");

  //It Store the ALL Property
  const [product, setproduct] = useState([]);
  //It Determining that onBlur and onFocus property
  const [active, setActive] = useState(false);

  const [cache, setCache] = useState({});
  const fetchData = async () => {
    //handel tha memory utilization
    if (cache[input]) {
      console.log("Comes form cache", cache[input]);
      setproduct(cache[input]);
    }
    console.log("API called:", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setproduct(json?.recipes);
    //If UseState Is Object That We Dinot pop any Things only Update the thigs that why We used the prev
    setCache((prev) => ({
      ...prev,
      [input]: json?.recipes,
    }));
  };
  useEffect(() => {
    //to reduced API Called we used Debunncing
    const times = setTimeout(
      fetchData,

      300
    );

    return () => {
      clearTimeout(times);
    };
  }, [input]);

  return (
    <div className="container1">
      <h1>Auto Completed SearchBar</h1>
      <div className="input-box">
        <input
          type="search"
          id="search"
          value={input}
          //In heare no need to name automatically set data
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
      </div>

      {active && (
        <div className="output-box">
          {product.map((item) => (
            <span key={item.id} className="item">
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
