import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({setItems}) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  
  const handleSubmit = (e) => {e.preventDefault();

      // basic validation
      if (!itemText) {
        alert("Please enter an item");
        inputRef.current.focus();
        return;
      }
       
      const newItem = {
        id: new Date().getTime(),
        name: itemText,
        packed: false,
      }

      setItems(prev => [...prev, newItem]);

      setItemText("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input ref={inputRef}
      value={itemText} onChange={(e) => setItemText(e.target.value)}
      autoFocus
      />
      <Button>Add to List</Button>
    </form>
  );
}

export default AddItemForm;
