import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Form
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}

export default App;
