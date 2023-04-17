import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <div className="App">
      <Form
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      ></Form>
    </div>
  );
}

export default App;
