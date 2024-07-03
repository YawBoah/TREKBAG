import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../context/ItemsContextProvider";

function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems
  } = useContext(ItemsContext);

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
