import { useState } from "react";


// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length <= 1) return;
    onNewCategory(trimmedValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-500 rounded-md px-4 py-2 w-64 m-2"
      />
      <button  type="submit" className="rounded-md bg-cyan-800 text-white px-4 py-2 font-semibold text-lg">Agregar</button>
    </form>
  );
};
