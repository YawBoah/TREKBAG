import { useState } from "react";
import Button from "./Button";

function AddItemForm({setItems}) {
  const [itemText, setItemText] = useState("");

  return (
    <form onSubmit={(e) => {e.preventDefault();

      // basic validation
      if (!itemText) {
        alert("Please enter an item");
        return;
      }
       
      const newItem = {
        id: new Date().getTime(),
        name: itemText,
        packed: false,
      }

      setItems(prev => [...prev, newItem]);
    }}>
      <h2>Add an item</h2>
      <input value={itemText} onChange={(e) => setItemText(e.target.value)}
      autoFocus={true}
      />
      <Button>Add to List</Button>
    </form>
  );
}

export default AddItemForm;
