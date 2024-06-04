function ItemList({ items }) {


  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
