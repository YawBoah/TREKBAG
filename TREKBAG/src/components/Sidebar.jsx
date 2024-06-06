import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"

function Sidebar({handleAddItem}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}/>

      <ButtonGroup/>
    </div>
  )
}

export default Sidebar