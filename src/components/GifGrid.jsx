import { useState, useEffect } from "react";
import { getGifts } from "../services/getGifts";

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  
  const [counter, setcounter] = useState(10);
  useEffect(() => {
    getGifts(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <p>{counter}</p>
      <button onClick={()=> (setcounter(counter + 1))}>+1</button>

      
    </>
  );
};

export default GifGrid;
