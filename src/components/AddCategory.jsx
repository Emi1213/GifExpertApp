import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categories) => [...categories, inputValue]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
