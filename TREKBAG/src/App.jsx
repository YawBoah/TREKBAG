import ItemsContextProvider from "./context/ItemsContextProvider";
import BackgroundHearing from "./components/BackgroundHearing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <BackgroundHearing />

      <main>
        <ItemsContextProvider>
        <Header />
        <ItemList />
        <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
