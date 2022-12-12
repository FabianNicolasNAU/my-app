import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
       const request = await fetch('https://dummyjson.com/products');
       const response = await request.json();       
       setData(response);
     } catch (error) {
      console.error(error)
     }
  }

  return (
    <div>
    <h1>Products List</h1>  
      {data && data.products.map((item) => (
        <div>
          <p key={item.title}>{item.title}</p>
          <p key={item.price}>{item.price}</p>
          <p key={item.description}>{item.description}</p>
          <img src={item.thumbnail} alt="imagen de producto"/>
        </div>

      ))}
    </div>
  );
}
export default App;
