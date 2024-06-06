import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // eslint-disable-next-line no-unused-vars
  const onAddCategory = (category) => {
    setCategories([...categories, category]);
  };
  return (
    <>
      <AddCategory setCategories={setCategories} />
      <button className="border border-black">Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
