import "./index.css";
import BackgroundHearing from "./components/BackgroundHearing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { initialItems } from "./lib/constants";

function App() {
  const itemsFromLocalStorage =JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: true
    }));

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: false
    }));

    setItems(newItems);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items]);

  return (
    <>
      <BackgroundHearing />

      <main>
        <Header numberOfItemsPacked={items.filter(item => item.packed).length} totalNumberOfItems={items.length} />
        <ItemList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
