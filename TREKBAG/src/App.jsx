import "./index.css";
import BackgroundHearing from "./components/BackgroundHearing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { initialItems } from "./lib/constants";

function App() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItemText) =>{
     const newItem = {
       id: new Date().getTime(),
       name: newItemText,
       packed: false,
     };


      const newItems = [...items, newItem];
      setItems(newItems);
    };

    const handleRemoveAllItems = () => {
      setItems([]);
    }

  return (
    <>
      <BackgroundHearing />

      <main>
        <Header />
        <ItemList items={items}/>
        <Sidebar handleAddItem={handleAddItem}
        handleRemoveAllItems={handleRemoveAllItems}/>
      </main>

      <Footer />
    </>
  );
}

export default App;
