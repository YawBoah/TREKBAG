import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"

function Sidebar({setItems}) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems}/>

      <ButtonGroup/>
    </div>
  )
}

export default Sidebar