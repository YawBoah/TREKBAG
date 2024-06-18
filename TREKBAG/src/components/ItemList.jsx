function ItemList({ items, handleDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} />
      ))}
    </ul>
  );
}

export default ItemList;

function Item({ item, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)} >❌</button>
    </li>
  );
}
