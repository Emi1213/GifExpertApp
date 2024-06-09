import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // eslint-disable-next-line no-unused-vars
  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };
  return (
    <>
      <AddCategory onNewCategory={onAddCategory} />
      
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      
    </>
  );
};
