import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };
  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      
    </>
  );
};
