import "./index.css";
import BackgroundHearing from "./components/BackgroundHearing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BackgroundHearing />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
