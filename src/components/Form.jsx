import React, { useState } from "react";

const Form = (props) => {
  const [store, setStore] = useState("");
  const [item, setItem] = useState("");

  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const obj = {
        key: Math.random(),
        store,
        item
    }
    props.setShoppingList((pastValue) => {
        return [obj, ...pastValue]
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="storeInput">Store</label>
      <input
        type="text"
        id="storeInput"
        onChange={handleStoreChange}
        value={store}
        placeholder="store"
      />
      <label htmlFor="itemInput">Item</label>
      <input
        type="text"
        id="itemInput"
        onChange={handleItemChange}
        value={item}
        placeholder="item"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
