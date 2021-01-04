import React, { useState } from "react";
import Talletus from "./Talletus";

const Aika = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const saveItem = () => {
    if (value === "") {
      return;
    }
    setItems([...items, value]);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const removeItem = (e) => {
    let item = e.target.innerText;
    let filtered = items.filter((x) => {
      return x !== item;
    });
    setItems(filtered);
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="tunniste"
      />

      <button onClick={() => saveItem()}>Tallenna</button>
      <h3>Tallennetut ajat</h3>
      {items.length === 0 && <p>Ei tallennettuja aikoja!</p>}
        {items.map((item, index) => {
          return (
            <Talletus key={index} item={item} clickCallback={removeItem} />
          );
        })}
      <button onClick={() => setItems([])}>Tyhjennä lista</button>
    </div>
  );
};

export default Aika;
