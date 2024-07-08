import { useItemsStore } from "../stores/itemsStores";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

 function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  console.log("Sidebar rendering...");

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      <ButtonGroup />
    </div>
  );
}

export default Sidebar
