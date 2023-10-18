import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const numberItems = items.length;

  const packedItems = items.reduce(
    (acc, curr) => acc + (curr.packed === false ? 0 : 1),
    0
  );

  const percentItems = Math.round((packedItems / numberItems) * 100);

  function handleDeleteItems() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) {
      setItems((items) => []);
    }
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onDeleteItems={handleDeleteItems}
      />
      <Stats number={numberItems} packed={packedItems} percent={percentItems} />
    </div>
  );
}
