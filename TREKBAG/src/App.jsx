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

  return (
    <>
      <BackgroundHearing />

      <main>
        <Header />
        <ItemList items={items}/>
        <Sidebar setItems={setItems}/>
      </main>

      <Footer />
    </>
  );
}

export default App;
