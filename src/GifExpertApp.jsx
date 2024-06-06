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
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };
  return (
    <>
      <AddCategory onNewCategory={onAddCategory} />
      <ol type="1">
        {categories.map((category) => {
          return <li key={category} className="text-lg ">{category}</li>;
        })}
      </ol>
    </>
  );
};
