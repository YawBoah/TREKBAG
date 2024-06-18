import Button from "./Button";

function ButtonGroup(handleRemoveAllItems) {
  return (
    <section className="button-group">
      <Button buttonType="secondary">Mark all as complete</Button>
      <Button buttonType="secondary">Mark all as incomplete</Button>
      <Button buttonType="secondary">Reset to initial</Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
