import Button from "./Button";

function ButtonGroup({handleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsIncomplete}) {
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>Mark all as complete</Button>
      <Button buttonType="secondary" onClick={handleMarkAllAsIncomplete} >Mark all as incomplete</Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>Reset to initial</Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
