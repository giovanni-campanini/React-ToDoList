import React, { useState } from "react";
import Item from "./Item";
import Input from "./Input";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input addItem={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Item
              key={index}
              id={index}
              text={todoItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
